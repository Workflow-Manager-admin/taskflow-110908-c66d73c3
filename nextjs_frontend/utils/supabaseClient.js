'use client';

import { createClient } from '@supabase/supabase-js';

if (typeof window === "undefined") {
  throw new Error(
    "Do not import supabaseClient.js from a Server Component or during SSR! It must only execute on the client."
  );
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
