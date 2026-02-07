import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    if (!process.env.SUPABASE_URL) {
      throw new Error('Missing SUPABASE_URL environment variable');
    }
    if (!process.env.SUPABASE_SERVICE_KEY) {
      throw new Error('Missing SUPABASE_SERVICE_KEY environment variable');
    }
    _supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }
  return _supabase;
}
