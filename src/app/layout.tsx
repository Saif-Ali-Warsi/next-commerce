import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NextCommerce",
  description: "Your online shopping destination",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
