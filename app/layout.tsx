import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} flex items-center justify-center bg-white`}
      >
        <main className="w-full max-w-[640px] bg-white py-5 tracking-[0.005em] text-[#000000E5]">
          {children}
        </main>
      </body>
    </html>
  );
}
