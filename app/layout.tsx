import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import type { Metadata } from "next";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Hitomi Winberg",
  description: "Hitomi Winberg's portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} montserrat`}>{children}</body>
    </html>
  );
}
