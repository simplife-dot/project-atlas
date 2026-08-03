import Image from "next/image";
import { LogOut, UserRound } from "lucide-react";
import type { Session } from "next-auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function UserProfile({ user }: { user: Session["user"] }) {
  return <div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-medium">{user?.name ?? "Atlas user"}</p><p className="max-w-48 truncate text-xs text-muted-foreground">{user?.email}</p></div>{user?.image ? <Image className="rounded-full" src={user.image} width={36} height={36} alt="" /> : <span className="grid h-9 w-9 place-items-center rounded-full bg-muted"><UserRound className="h-4 w-4" /></span>}<form action={async () => { "use server"; await signOut({ redirectTo: "/login" }); }}><Button type="submit" size="icon" variant="ghost" aria-label="Sign out"><LogOut className="h-4 w-4" /></Button></form></div>;
}
