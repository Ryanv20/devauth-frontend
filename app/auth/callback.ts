// 1 file: app/auth/callback.ts
// import {createClient} from '@supabase/supabase-js';
// const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
// export default async function h({query:{code}}){ return sb.auth.exchangeCodeForSession(code); }

// 1 file: app/auth/callback.ts
import {createClient} from '@supabase/supabase-js';
const SUPABASE_URL='https://ccfahcsgpqtgquhgdnoz.supabase.co'
const SUPABASE_KEY='sb_secret_mr01mkTt3uzPRNgt_cqY6g_xNGk-W_5'
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);
export default async function h({ query }: { query: { code: string } }) {
  return sb.auth.exchangeCodeForSession(query.code);
}