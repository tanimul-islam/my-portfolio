import type { Metadata } from "next";
import { Geist, Geist_Mono, Romanesco } from "next/font/google";
import "../styles/globals.css";

// Load Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const romanesco = Romanesco({
  variable: "--font-romanesco",
  subsets: ["latin"],
  weight: "400",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Tanimul Islam | Full-Stack Developer",
  description: "Portfolio website showcasing projects and skills.",
  openGraph: {
    title: "Tanimul Islam | Full-Stack Developer",
    description: "Portfolio website showcasing projects and skills.",
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // Change this to your actual portfolio URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${romanesco.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {/* ✅ Add the Header (Navbar) */}
        {/* <Header /> */}

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
