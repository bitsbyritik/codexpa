"use client";

import { Button } from "@codexpa/ui/components/ui/button";
import AnimationContainer from "./animate";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const MainNavbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AnimationContainer reverse delay={0.1}>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                C
              </div>
              <span className="text-xl font-bold">Codexpa</span>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>
    </AnimationContainer>
  );
};
