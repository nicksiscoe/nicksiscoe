"use client";

import type { Metadata } from "next";
import Script from "next/script";

type SiteMetadata = Metadata & {
  title: string;
  description: string;
};

const metadata: SiteMetadata = {
  title: "SportsTok",
  description: "see whats happening in sports",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qpo1usu.css" />
        {/* <script type="text/javascript" src="snowstorm.js"></script> */}
      </head>
      <body>
        {children}
        <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </body>
    </html>
  );
}
