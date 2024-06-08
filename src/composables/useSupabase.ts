import { createClient } from '@supabase/supabase-js';
import useAuth from '@/composables/useAuth';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((_event, session) => {
  const { user } = useAuth();
  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
