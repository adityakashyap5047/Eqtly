import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eqtly",
  description: "Eqtly is an AI-powered expense-sharing platform that makes group payments effortless and fair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
