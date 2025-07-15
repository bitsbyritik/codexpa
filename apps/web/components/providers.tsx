"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      enableColorScheme
      data-oid="mu0_dir"
    >
      {children}
    </NextThemesProvider>
  );
}
