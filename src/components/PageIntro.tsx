import { useLanguage } from "@/lib/i18n"
export default function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
 const { t } = useLanguage();

 return <div className="page-intro"><p className="eyebrow">{t(eyebrow)}</p><h1>{t(title)}</h1><p className="page-description">{t(description)}</p></div>
}
