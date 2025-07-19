import { supabase } from '../../lib/supabase'
import type { User } from '../../lib/types'

export class AdminService {
  // Get all users (admin only)
  static async getAllUsers(): Promise<{ users: User[] | null; error: any }> {
    try {
      const { data: users, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return { users, error: null }
    } catch (error) {
      console.error('Get all users error:', error)
      return { users: null, error }
    }
  }

  // Update user role (admin only)
  static async updateUserRole(userId: string, newRole: 'user' | 'admin'): Promise<{ user: User | null; error: any }> {
    try {
      // Update the profile table
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)
        .select()
        .single()

      if (profileError) throw profileError

      // Update the auth.users metadata (requires service role)
      // Note: This would typically be done server-side with service role
      // For now, we'll just update the profile table
      
      return { user: profile, error: null }
    } catch (error) {
      console.error('Update user role error:', error)
      return { user: null, error }
    }
  }

  // Delete user (admin only)
  static async deleteUser(userId: string): Promise<{ error: any }> {
    try {
      // First delete from profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId)

      if (profileError) throw profileError

      // Note: Deleting from auth.users requires service role
      // This would typically be done server-side

      return { error: null }
    } catch (error) {
      console.error('Delete user error:', error)
      return { error }
    }
  }

  // Get user statistics (admin only)
  static async getUserStats(): Promise<{ stats: any; error: any }> {
    try {
      const { data: users, error } = await supabase
        .from('profiles')
        .select('role, created_at')

      if (error) throw error

      const stats = {
        total: users.length,
        admins: users.filter(u => u.role === 'admin').length,
        regularUsers: users.filter(u => u.role === 'user').length,
        newThisMonth: users.filter(u => {
          const created = new Date(u.created_at)
          const now = new Date()
          return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear()
        }).length
      }

      return { stats, error: null }
    } catch (error) {
      console.error('Get user stats error:', error)
      return { stats: null, error }
    }
  }

  // Search users (admin only)
  static async searchUsers(query: string): Promise<{ users: User[] | null; error: any }> {
    try {
      const { data: users, error } = await supabase
        .from('profiles')
        .select('*')
        .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%`)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { users, error: null }
    } catch (error) {
      console.error('Search users error:', error)
      return { users: null, error }
    }
  }
} 