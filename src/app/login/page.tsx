import { redirect } from "next/navigation";
import { Github, Landmark } from "lucide-react";
import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function LoginPage() {
  if (await auth()) redirect("/dashboard");
  return <main className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
    <Card className="w-full max-w-md">
      <CardHeader className="text-center"><Landmark className="mx-auto mb-2 h-10 w-10" aria-hidden="true" /><CardTitle>Welcome to Atlas</CardTitle><CardDescription>Sign in to access your secure workspace.</CardDescription></CardHeader>
      <CardContent><form action={async () => { "use server"; await signIn("github", { redirectTo: "/dashboard" }); }}><Button className="w-full" type="submit"><Github className="h-4 w-4" />Continue with GitHub</Button></form><p className="mt-6 text-center text-xs text-muted-foreground">By continuing, you agree to use Atlas responsibly.</p></CardContent>
    </Card>
  </main>;
}
