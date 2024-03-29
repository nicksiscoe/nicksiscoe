"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

type SiteMetadata = Metadata & {
  title: string;
  description: string;
};

const metadata: SiteMetadata = {
  title: "Nick Siscoe 👋",
  description: "software engineer, designer, product manager, founder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://i.imgur.com/F8zr82l.png" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content=" https://i.imgur.com/F8zr82l.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qpo1usu.css" />
        {/* <script type="text/javascript" src="snowstorm.js"></script> */}
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </body>
    </html>
  );
}
