import { useEffect } from "react"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
}

export default function SEOHead({
  title = "Mahmoud Elsayed - Full Stack Developer & UI/UX Designer",
  description = "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions with exceptional user experiences.",
  keywords = "full stack developer, react developer, next.js, node.js, javascript, typescript, web development, UI/UX design, portfolio",
  image = "/og-image.jpg",
  url = "/",
  type = "website",
}: SEOHeadProps) {
  const fullTitle = title.includes("Mahmoud Elsayed") ? title : `${title} | Mahmoud Elsayed - Full Stack Developer`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name"
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta("description", description)
    setMeta("keywords", keywords)
    setMeta("og:title", fullTitle, true)
    setMeta("og:description", description, true)
    setMeta("og:type", type, true)
    setMeta("og:url", url, true)
    setMeta("og:image", image, true)
    setMeta("twitter:title", fullTitle, true)
    setMeta("twitter:description", description, true)
    setMeta("twitter:image", image, true)
  }, [fullTitle, description, keywords, type, url, image])

  return null
}
