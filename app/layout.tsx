import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/animations/SmoothScroll";
import CursorGlow from "@/components/animations/CursorGlow";

export const metadata: Metadata = {
  title: "Ritam Roy Choudhuri — Developer Portfolio",
  description:
    "Frontend Engineer, Creative Developer and Researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}