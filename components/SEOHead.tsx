import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export default function SEOHead({
  title = "Your Name - Full Stack Developer & UI/UX Designer",
  description = "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions with exceptional user experiences.",
  keywords = "full stack developer, react developer, next.js, node.js, javascript, typescript, web development, UI/UX design, portfolio",
  image = "/og-image.jpg",
  url = "https://yourportfolio.com",
  type = "website",
  author = "Your Name",
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const fullTitle = title.includes("Your Name") ? title : `${title} | Your Name - Full Stack Developer`
  const fullUrl = url.startsWith("http") ? url : `https://yourportfolio.com${url}`
  const fullImage = image.startsWith("http") ? image : `https://yourportfolio.com${image}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Your Name Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:creator" content="@yourtwitterhandle" />

      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Your Name",
            url: "https://yourportfolio.com",
            image: fullImage,
            sameAs: [
              "https://linkedin.com/in/yourprofile",
              "https://github.com/yourusername",
              "https://twitter.com/yourtwitterhandle",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Your Company",
            },
            alumniOf: {
              "@type": "Organization",
              name: "Your University",
            },
            knowsAbout: [
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Full Stack Development",
              "UI/UX Design",
            ],
          }),
        }}
      />
    </Head>
  )
}
