import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Framer Motion Next.js Example",
  description: "Dropdown Menu with Framer Motion and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rgm1dlw.css" />
      </head>
      <body className="bg-[#6600ff]">{children}</body>
    </html>
  );
}
