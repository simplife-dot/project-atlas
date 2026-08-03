import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSettings } from "@/components/theme-settings";
export const metadata = { title: "Settings" };
export default function SettingsPage() { return <div className="mx-auto max-w-3xl space-y-6"><div><h1 className="text-3xl font-bold tracking-tight">Settings</h1><p className="text-muted-foreground">Manage your Atlas experience.</p></div><Card><CardHeader><CardTitle>Appearance</CardTitle><CardDescription>Choose how Atlas looks on this device.</CardDescription></CardHeader><CardContent><ThemeSettings /></CardContent></Card></div>; }
