import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as Sentry from "@sentry/react";
import "./globals.css";

// Initialize Google font
const inter = Inter({ subsets: ["latin"] });

// Initialize Sentry for error tracking and performance monitoring
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [],
  tracesSampleRate: 1.0,
});

// Define metadata for the Sales AI MVP project
export const metadata: Metadata = {
  title: "Sales AI MVP",
  description: "AI-driven B2B marketplace connecting vendors, introducers, and buyers",
};

// Define RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}