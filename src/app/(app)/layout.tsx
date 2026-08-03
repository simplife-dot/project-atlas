import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AppNavigation } from "@/components/app-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserProfile } from "@/components/user-profile";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return <div className="min-h-screen md:flex"><AppNavigation /><div className="flex min-w-0 flex-1 flex-col"><header className="flex h-16 items-center justify-end gap-2 border-b px-4 md:px-8"><ThemeToggle /><UserProfile user={session.user} /></header><main className="flex-1 bg-muted/30 p-4 md:p-8">{children}</main></div></div>;
}
