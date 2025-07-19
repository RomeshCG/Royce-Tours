// Database types (you can generate these from your Supabase dashboard)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      tours: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          duration: string
          image_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          duration: string
          image_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          duration?: string
          image_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          tour_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          booking_date: string
          number_of_people: number
          total_price: number
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tour_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          booking_date: string
          number_of_people: number
          total_price: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tour_id?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          booking_date?: string
          number_of_people?: number
          total_price?: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// User types
export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

export interface AuthUser {
  id: string
  email: string
  user_metadata: {
    first_name: string
    last_name: string
  }
  app_metadata: {
    role?: 'user' | 'admin'
  }
}

export interface SignUpData {
  email: string
  password: string
  first_name: string
  last_name: string
}

export interface SignInData {
  email: string
  password: string
} 