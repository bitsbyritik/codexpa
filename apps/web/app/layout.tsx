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
    <html lang="en" suppressHydrationWarning data-oid="8z_dfiu">
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        data-oid="_--70f7"
      >
        <Providers data-oid="rqc4hbq">{children}</Providers>
      </body>
    </html>
  );
}
