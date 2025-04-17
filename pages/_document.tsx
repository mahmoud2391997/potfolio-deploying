import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Head>
  {/* Canonical URL */}
  <link rel="canonical" href="https://potfolio-deploying.vercel.app" />

  {/* Basic Meta Tags */}
  <meta charSet="UTF-8" />
  <title>Mahmoud Elsayed | Full Stack Web Developer Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Welcome to the portfolio of Mahmoud Elsayed, a passionate Full Stack Web Developer. Explore my work with React, Next.js, Node.js, MongoDB, and more."
  />
  <meta
    name="keywords"
    content="Mahmoud Elsayed, web development, full stack developer, React, Next.js, Tailwind CSS, MongoDB, Node.js, TypeScript, portfolio"
  />
  <meta name="author" content="Mahmoud Elsayed" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />

  {/* OpenGraph Meta Tags */}
  <meta property="og:title" content="Mahmoud Elsayed | Full Stack Web Developer" />
  <meta
    property="og:description"
    content="Check out the work of Mahmoud Elsayed, a full stack developer who builds modern web applications using the latest technologies."
  />
  <meta
    property="og:image"
    content="https://potfolio-deploying.vercel.app/portfolio.jpg"
  />
  <meta property="og:url" content="https://potfolio-deploying.vercel.app" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Mahmoud Elsayed Portfolio" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mahmoud Elsayed | Full Stack Web Developer" />
  <meta
    name="twitter:description"
    content="Explore Mahmoud Elsayed’s portfolio and see his work on React, TypeScript, Node.js, Express, and more."
  />
  <meta
    name="twitter:image"
    content="https://potfolio-deploying.vercel.app/portfolio.jpg"
  />
  <meta name="twitter:site" content="@yourhandle" />
  <meta name="twitter:creator" content="@yourhandle" />

  {/* Optional Geo Tags */}
  <meta name="geo.region" content="EG" />
  <meta name="geo.placename" content="Cairo, Egypt" />
  <meta name="geo.position" content="30.0444;31.2357" />
  <meta name="ICBM" content="30.0444, 31.2357" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mahmoud Elsayed",
        "url": "https://potfolio-deploying.vercel.app",
        "sameAs": [
          "https://github.com/yourusername",
          "https://linkedin.com/in/yourusername",
          "https://twitter.com/yourhandle"
        ],
        "jobTitle": "Full Stack Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "image": "https://potfolio-deploying.vercel.app/portfolio.jpg",
        "description": "A passionate full stack developer specializing in building modern web apps with React, Next.js, Node.js, and MongoDB."
      }
    `}
  </script>
</Head>

      <body className="antialiased">
        <Main />
        <NextScript />
<Analytics />
      </body>
    </Html>
  );
}
