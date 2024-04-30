"use client"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

const LoginForm = () => {
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });
  }

  return (
    <Button 
      variant={'outline'}
      onClick={handleLogin}
      className="flex items-center gap-2"
    >
      <GitHubLogoIcon />
      Login
    </Button>
  )
}

export default LoginForm