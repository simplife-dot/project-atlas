"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
const themes = ["light", "dark", "system"] as const;
export function ThemeSettings() { const { theme, setTheme } = useTheme(); return <div className="flex flex-wrap gap-2">{themes.map((value) => <Button key={value} variant={theme === value ? "default" : "outline"} onClick={() => setTheme(value)} className="capitalize">{value}</Button>)}</div>; }
