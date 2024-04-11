import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PSS Financial Services - Expert Financial Solutions for Your Business",
  description: "PSS Financial Services is a leading provider of financial solutions for businesses of all sizes. From financial planning to investment management, we offer a range of services tailored to meet your unique needs. Our team of experienced financial professionals is dedicated to helping you achieve your financial goals. Contact us today to learn more about how we can help your business thrive.",
  openGraph: {
    title: "PSS Financial Services - Expert Financial Solutions for Your Business",
    description: "PSS Financial Services is a leading provider of financial solutions for businesses of all sizes. From financial planning to investment management, we offer a range of services tailored to meet your unique needs. Our team of experienced financial professionals is dedicated to helping you achieve your financial goals. Contact us today to learn more about how we can help your business thrive.",
    type: "website",
    url: "https://pssfinancial.com/",
    siteName: "PSS Financial Services",
    images: [
      {
        url: "https://pssfinancial.com/",
        width: 800,
        height: 600,
        alt: "PSS Financial Services Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PSS Financial Services - Expert Financial Solutions for Your Business",
    description: "PSS Financial Services is a leading provider of financial solutions for businesses of all sizes. From financial planning to investment management, we offer a range of services tailored to meet your unique needs. Our team of experienced financial professionals is dedicated to helping you achieve your financial goals. Contact us today to learn more about how we can help your business thrive.",
    images: [
      "https://pssfinancial.com/"
    ]
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
