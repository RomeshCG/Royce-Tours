# Supabase Database Setup Guide

This guide will help you set up the complete authentication and user management system in Supabase.

## 1. Create the `profiles` table

Run this SQL in your Supabase SQL editor:

```sql
-- Create the profiles table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
```

## 2. Set up RLS Policies (FIXED VERSION)

```sql
-- First, drop any existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert during signup" ON public.profiles;

-- Policy 1: Users can view and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Policy 2: Allow insert during signup (trigger will handle this)
CREATE POLICY "Allow insert during signup" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Policy 3: Admins can view and update all profiles (using JWT claims)
CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (
        (auth.jwt() ->> 'role')::text = 'admin'
    );

CREATE POLICY "Admins can update all profiles" ON public.profiles
    FOR UPDATE USING (
        (auth.jwt() ->> 'role')::text = 'admin'
    );
```

## 3. Create the trigger function

```sql
-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, first_name, last_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
        COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
        'user'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## 4. Create function to manage user roles

```sql
-- Function to set user role (requires service role)
CREATE OR REPLACE FUNCTION public.set_user_role(user_id UUID, new_role TEXT)
RETURNS VOID AS $$
BEGIN
    -- Update the profile
    UPDATE public.profiles 
    SET role = new_role 
    WHERE id = user_id;
    
    -- Update auth.users metadata (requires service role)
    UPDATE auth.users 
    SET raw_app_meta_data = 
        COALESCE(raw_app_meta_data, '{}'::jsonb) || 
        jsonb_build_object('role', new_role)
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## 5. Create your first admin user

After setting up the above, you can create your first admin user:

1. Sign up a new user through your application
2. Run this SQL to make them an admin:

```sql
-- Replace 'user-email@example.com' with the actual email
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'user-email@example.com';

-- Also update the JWT metadata
UPDATE auth.users 
SET raw_app_meta_data = 
    COALESCE(raw_app_meta_data, '{}'::jsonb) || 
    jsonb_build_object('role', 'admin')
WHERE email = 'user-email@example.com';
```

## 6. Environment Variables

Make sure you have these environment variables in your `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 7. Testing the Setup

1. **Test User Registration:**
   - Go to `/auth` in your app
   - Sign up with a new account
   - Check that a profile is created in the `profiles` table

2. **Test Admin Access:**
   - Make a user an admin using the SQL above
   - Sign in with that account
   - You should see "Admin Panel" in the header
   - Navigate to `/admin/users` to manage users

3. **Test Role Management:**
   - As an admin, go to the user management page
   - Try changing user roles
   - Verify the changes are reflected in the database

## 8. Troubleshooting Authentication Issues

If you're experiencing authentication problems (like being stuck on sign-in), try these steps:

### Check if the trigger is working:

```sql
-- Check if the trigger exists
SELECT * FROM information_schema.triggers WHERE trigger_name = 'on_auth_user_created';

-- Check if the function exists
SELECT * FROM information_schema.routines WHERE routine_name = 'handle_new_user';

-- Test the trigger manually (replace with actual user ID)
SELECT * FROM auth.users WHERE email = 'your-email@example.com';
SELECT * FROM public.profiles WHERE email = 'your-email@example.com';
```

### If the trigger isn't working, recreate it:

```sql
-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Recreate the function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, first_name, last_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
        COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
        'user'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Manual profile creation (if trigger fails):

If the trigger isn't working, you can manually create a profile:

```sql
-- Replace with actual values
INSERT INTO public.profiles (id, email, first_name, last_name, role)
VALUES (
    'user-uuid-from-auth-users',
    'user@example.com',
    'First',
    'Last',
    'user'
);
```

### Check RLS policies:

```sql
-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'profiles';

-- Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'profiles';
```

## 9. Additional Security Considerations

For production, consider adding:

```sql
-- Add indexes for better performance
CREATE INDEX idx_profiles_email ON public.profiles(email);
CREATE INDEX idx_profiles_role ON public.profiles(role);

-- Add constraints
ALTER TABLE public.profiles 
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

## 10. Debug Queries

**Common Issues:**

1. **Profile not created after signup:**
   - Check that the trigger function is created correctly
   - Verify RLS policies allow the insert

2. **Can't access admin routes:**
   - Ensure the user has `role = 'admin'` in the profiles table
   - Check that the JWT contains the role claim

3. **RLS blocking operations:**
   - Verify the policies are correctly written
   - Check that the user is authenticated when required

**Debug Queries:**

```sql
-- Check if a user exists
SELECT * FROM public.profiles WHERE email = 'user@example.com';

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'profiles';

-- Check trigger function
SELECT * FROM information_schema.triggers WHERE trigger_name = 'on_auth_user_created';

-- Check auth users
SELECT id, email, raw_user_meta_data FROM auth.users WHERE email = 'user@example.com';
```

## 11. Next Steps

After completing this setup:

1. Test the complete authentication flow
2. Implement additional admin features as needed
3. Add more sophisticated role-based permissions
4. Consider implementing audit logging for admin actions
5. Set up email verification if required

This setup provides a solid foundation for user authentication and admin management in your Royce Tours application! 