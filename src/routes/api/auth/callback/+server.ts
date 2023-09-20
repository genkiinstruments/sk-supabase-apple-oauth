import { RequestEvent, redirect } from "@sveltejs/kit";

export const GET = async ({ url, locals: { supabase } }: RequestEvent) => {
  const code = url.searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  throw redirect(303, "/");
};
