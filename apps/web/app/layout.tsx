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
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
      data-oid="thx1xf3"
    >
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
        data-oid=":tsuz09"
      >
        <Providers data-oid="2bjbr-9">{children}</Providers>
      </body>
    </html>
  );
}
