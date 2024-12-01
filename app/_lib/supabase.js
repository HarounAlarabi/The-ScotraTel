import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

export const supabaseUrl = "https://kkegsgshjfgaxkifdqly.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZWdzZ3NoamZnYXhraWZkcWx5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTIzNTkzMSwiZXhwIjoyMDQ2ODExOTMxfQ.kHqBVyaB9lBU8AAEaZgUkxZ84LoLYraa3BGePBe9w8Q";

export const supabase = createClient(supabaseUrl, supabaseKey);
