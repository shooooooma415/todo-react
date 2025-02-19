import { supabase } from '../utils/supabaseClient';

export async function fetchTodos() {
  const { data } = await supabase.from('todos').select('*');
  return data || [];
}

// src/utils/types.ts
export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
