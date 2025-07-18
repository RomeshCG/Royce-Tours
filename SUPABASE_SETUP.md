# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be set up

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**

## 3. Set Up Environment Variables

1. Copy the `env.example` file to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

## 4. Database Schema

The connector expects the following tables in your Supabase database:

### Tours Table
```sql
CREATE TABLE tours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Bookings Table
```sql
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  booking_date DATE NOT NULL,
  number_of_people INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 5. Row Level Security (RLS)

Enable RLS and set up policies:

```sql
-- Enable RLS
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Tours: Allow public read access
CREATE POLICY "Allow public read access to tours" ON tours
  FOR SELECT USING (true);

-- Bookings: Allow users to create their own bookings
CREATE POLICY "Allow users to create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

-- Bookings: Allow users to view their own bookings
CREATE POLICY "Allow users to view their bookings" ON bookings
  FOR SELECT USING (true);

-- Contact messages: Allow public insert
CREATE POLICY "Allow public to send contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);
```

## 6. Usage

Import and use the Supabase connector in your components:

```typescript
import { supabase, supabaseHelpers } from '../lib/supabase'

// Get all tours
const tours = await supabaseHelpers.getTours()

// Create a booking
const booking = await supabaseHelpers.createBooking({
  tour_id: 'tour-uuid',
  customer_name: 'John Doe',
  customer_email: 'john@example.com',
  customer_phone: '+1234567890',
  booking_date: '2024-01-15',
  number_of_people: 2,
  total_price: 200.00
})

// Send contact message
const message = await supabaseHelpers.sendContactMessage({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello, I have a question about your tours.'
})
```

## 7. TypeScript Types

The connector includes TypeScript types for all database operations. You can generate updated types from your Supabase dashboard:

1. Go to **Settings** → **API**
2. Click **Generate types**
3. Copy the generated types and replace the `Database` interface in `src/lib/supabase.ts` 