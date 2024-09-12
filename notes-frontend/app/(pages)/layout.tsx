import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const golos = Golos_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note app",
  description: "Minimal easy note taking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${golos.className} tracking-tight transition-all duration-300 ease-in-out dark:bg-[#191919] dark:text-[#fefefe] text-[#191919] bg-[#fefefe]`}
      >
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
