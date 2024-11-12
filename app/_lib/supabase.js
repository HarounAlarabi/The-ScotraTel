import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// export const SUPABASE_URL = "https://kkegsgshjfgaxkifdqly.supabase.co";

// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZWdzZ3NoamZnYXhraWZkcWx5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTIzNTkzMSwiZXhwIjoyMDQ2ODExOTMxfQ.kHqBVyaB9lBU8AAEaZgUkxZ84LoLYraa3BGePBe9w8Q";

// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// export default supabase;
