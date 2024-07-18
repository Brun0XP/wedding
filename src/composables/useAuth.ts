import { ref } from 'vue';
import { User } from '@supabase/supabase-js';
import useSupabase from '@/composables/useSupabase';

// so that it will act as global state and always refer to a single user
const user = ref<User | null>(null);

export default function useAuth() {
  const { supabase } = useSupabase();

  /**
   * Login with email and password
   */
  const login = async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return user;
  };

  /**
   * Login with google, github, etc
   */
  const loginWithSocialProvider = async (_provider: string) => {
    // const { data: user, error } = await supabase.auth.signInWithIdToken({ provider });
    // if (error) throw error;
    // return user;
  };
  /**
   * Logout
   */
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = async () => {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
  };

  /**
   * Register
   */
  const register = async ({
    email,
    password,
    ...meta
  }: {
    email: string;
    password: string;
  }) => {
    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: meta }
    });

    if (error) throw error;
    return user;
  };

  /**
   * Update user email, password, or meta data
   */
  const update = async (data: any) => {
    const { data: user, error } = await supabase.auth.updateUser(data);
    if (error) throw error;
    return user;
  };

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email: string) => {
    const { data: user, error } = await supabase.auth.resetPasswordForEmail(
      email
    );
    if (error) throw error;
    return user;
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
    // maybeHandleEmailConfirmation,
  };
}
