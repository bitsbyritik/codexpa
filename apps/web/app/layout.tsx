import { Geist, Geist_Mono } from "next/font/google";

import "@codexpa/ui/globals.css";
import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="zs5bfpa">
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        data-oid="p:xf7al"
      >
        <Providers data-oid="7fx_k2_">{children}</Providers>
      </body>
    </html>
  );
}
