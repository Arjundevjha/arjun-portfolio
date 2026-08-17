import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arjun Dev Jha | Engineering Lab & Portfolio",
  description: "Arjun Dev Jha — JC1 student at Anderson Serangoon Junior College (Singapore). Student engineer exploring intelligent agentic systems, applied cybersecurity, algorithmic robotics, and full-stack software.",
  keywords: [
    "Arjun Dev Jha",
    "Student Engineer",
    "Anderson Serangoon Junior College",
    "ASRJC",
    "Artificial Intelligence",
    "Cybersecurity",
    "Robotics",
    "Singapore",
    "Gemini API",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Arjun Dev Jha", url: "https://github.com/Arjundevjha" }],
  creator: "Arjun Dev Jha",
  openGraph: {
    title: "Arjun Dev Jha | Engineering Lab & Portfolio",
    description: "JC1 student engineer exploring intelligent agentic systems, applied cybersecurity, algorithmic robotics, and full-stack software.",
    type: "website",
    locale: "en_SG",
    siteName: "Arjun Dev Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Dev Jha | Engineering Lab & Portfolio",
    description: "JC1 student engineer exploring intelligent agentic systems, applied cybersecurity, algorithmic robotics, and full-stack software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
