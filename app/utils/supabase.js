import * as sb from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not defined");
if (!supabaseKey) throw new Error("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY is not defined");

export const supabase = sb.createClient(supabaseUrl, supabaseKey);

// Add telemetry
supabase.from("users").select().then(r => {
  console.log("Probe query:", r);
});
