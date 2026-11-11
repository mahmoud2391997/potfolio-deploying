import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import arabic from "./ar.json"
export type Language = "en" | "ar"
const translations: Record<string, string> = arabic
const STORAGE_KEY = "mahmoud-portfolio-language"
export function translate<T>(value: T, language: Language): T {
  if (language === "en" || typeof value !== "string") return value
  const key = value.trim().replace(/\s+/g, " ")
  const result = translations[key]
  if (!result) return value
  const leading = value.match(/^\s*/)?.[0] ?? ""
  const trailing = value.match(/\s*$/)?.[0] ?? ""
  return (leading + result + trailing) as T
}
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: typeof translateValue }
function translateValue<T>(value: T): T { return value }
const LanguageContext = createContext<LanguageContextValue | null>(null)
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en" } catch { return "en" }
  })
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    try { localStorage.setItem(STORAGE_KEY, language) } catch { /* Private browsing can deny storage. */ }
  }, [language])
  const t = useCallback(<T,>(value: T): T => translate(value, language), [language])
  const context = useMemo(() => ({ language, setLanguage, t }), [language, t])
  return <LanguageContext.Provider value={context}>{children}</LanguageContext.Provider>
}
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("LanguageProvider is required")
  return context
}
