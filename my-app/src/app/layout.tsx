import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Cedar Vale Shimla | Where the Mountains Slow Time",
  description:
    "A luxury retreat nestled in cedar forests, overlooking the timeless charm of Shimla. Book your mountain escape at The Cedar Vale.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0e1f0e] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
