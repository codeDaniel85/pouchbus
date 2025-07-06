export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          company_address: string
          company_business_number: string
          company_description: string | null
          company_email: string | null
          company_id: number
          company_logo: string | null
          company_name: string
          company_phone: string
          company_status: string
          company_website: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          company_address: string
          company_business_number: string
          company_description?: string | null
          company_email?: string | null
          company_id?: never
          company_logo?: string | null
          company_name: string
          company_phone: string
          company_status?: string
          company_website?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          company_address?: string
          company_business_number?: string
          company_description?: string | null
          company_email?: string | null
          company_id?: never
          company_logo?: string | null
          company_name?: string
          company_phone?: string
          company_status?: string
          company_website?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar: string | null
          created_at: string
          devide_token: string | null
          etc_1: string | null
          etc_2: string | null
          etc_3: string | null
          etc_4: string | null
          etc_5: string | null
          login_id: string
          phone_number: string | null
          signup_type: Database["public"]["Enums"]["signup_type"]
          updated_at: string
          user_id: string
          user_name: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          devide_token?: string | null
          etc_1?: string | null
          etc_2?: string | null
          etc_3?: string | null
          etc_4?: string | null
          etc_5?: string | null
          login_id: string
          phone_number?: string | null
          signup_type?: Database["public"]["Enums"]["signup_type"]
          updated_at?: string
          user_id: string
          user_name: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          devide_token?: string | null
          etc_1?: string | null
          etc_2?: string | null
          etc_3?: string | null
          etc_4?: string | null
          etc_5?: string | null
          login_id?: string
          phone_number?: string | null
          signup_type?: Database["public"]["Enums"]["signup_type"]
          updated_at?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string
          role_description: string | null
          role_id: Database["public"]["Enums"]["role_id"]
          role_level: number
          role_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          role_description?: string | null
          role_id: Database["public"]["Enums"]["role_id"]
          role_level?: number
          role_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          role_description?: string | null
          role_id?: Database["public"]["Enums"]["role_id"]
          role_level?: number
          role_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_company_roles: {
        Row: {
          approval_at: string | null
          approval_by: string | null
          approval_reason: string | null
          approval_status: Database["public"]["Enums"]["approval_status"]
          company_id: number
          created_at: string
          role_id: Database["public"]["Enums"]["role_id"]
          updated_at: string
          user_id: string
        }
        Insert: {
          approval_at?: string | null
          approval_by?: string | null
          approval_reason?: string | null
          approval_status?: Database["public"]["Enums"]["approval_status"]
          company_id: number
          created_at?: string
          role_id?: Database["public"]["Enums"]["role_id"]
          updated_at?: string
          user_id: string
        }
        Update: {
          approval_at?: string | null
          approval_by?: string | null
          approval_reason?: string | null
          approval_status?: Database["public"]["Enums"]["approval_status"]
          company_id?: number
          created_at?: string
          role_id?: Database["public"]["Enums"]["role_id"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_company_roles_company_id_companies_company_id_fk"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "user_company_roles_user_id_profiles_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      approval_status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED"
      role_id:
        | "ROLE_USER"
        | "ROLE_DRIVER"
        | "ROLE_COMPANY_ADMIN"
        | "ROLE_SYSTEM_ADMIN"
      signup_type: "email" | "google" | "apple" | "kakao" | "naver"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      approval_status: ["PENDING", "APPROVED", "REJECTED", "CANCELLED"],
      role_id: [
        "ROLE_USER",
        "ROLE_DRIVER",
        "ROLE_COMPANY_ADMIN",
        "ROLE_SYSTEM_ADMIN",
      ],
      signup_type: ["email", "google", "apple", "kakao", "naver"],
    },
  },
} as const
