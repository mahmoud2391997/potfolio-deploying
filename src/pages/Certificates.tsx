import { useLanguage } from "@/lib/i18n"
import PageIntro from "../components/PageIntro"
import SEOHead from "../components/SEOHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

interface Certificate {
  id: string
  image: string
  header: string
  subheader: string
  alt: string
}

export default function Certificates() {
 const { t } = useLanguage();

  const certificates: Certificate[] = [
    {
      id: "iti-flutter",
      image: "/iti-flutter-certificate.png",
      header: "Flutter Development Workshop",
      subheader: "Information Technology Institute (ITI) - 15 Hours Intensive Training",
      alt: "ITI Flutter Workshop Certificate for Mahmoud Mohamed Elsayed",
    },
    {
      id: "iti-frontend",
      image: "/iti-frontend-certificate.jpeg",
      header: "Front-End & Cross Platform Development",
      subheader: "Information Technology Institute (ITI) - Complete Development Track",
      alt: "ITI Front-End and Cross Platform Development Certificate",
    },
    {
      id: "sprints-fullstack",
      image: "/sprints.png",
      header: "Full Stack Development BootCamp",
      subheader: "Sprints Academy - Comprehensive Full Stack Training Program",
      alt: "Sprints Full Stack Development BootCamp Certificate",
    },
    {
      id: "ischool-tutor",
      image: "/ischool-certificate.webp",
      header: "Certificate of Completion - Tutor",
      subheader: "iSchool - 2026 Intake, Raising the Next Generation of Tech Leaders",
      alt: "iSchool Certificate of Completion for tutor Mahmoud Mohamed",
    },
    {
      id: "experience-letter",
      image: "/experience-letter.png",
      header: "Professional Experience Letter",
      subheader: "Statistical Website Development - Professional Work Experience",
      alt: "Professional Experience Letter in Arabic",
    },
  ]

  return (
    <>
      <SEOHead
        title={t("Certificates & Achievements - Mahmoud Elsayed")}
        description={t("View my professional certificates and achievements in web development, including certifications from ITI, Sprints Academy, and professional experience letters.")}
        keywords="certificates, achievements, ITI, Sprints Academy, full stack developer, flutter, front-end development, professional experience"
        url="/certificates"
      />

      <div className="portfolio-shell inner-page certificates-page">
        <Navbar />

        <main className="section-wrap inner-main">
          <section className="">
            <div className="max-w-6xl mx-auto">
              <PageIntro eyebrow={t("LEARNING & GROWTH")} title={t("Certificates & achievements.")} description={t("Professional certifications and achievements from my continuous learning journey in web development and technology.")}/>
            </div>
          </section>

          <section className="pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="surface-card rounded-xl overflow-hidden hover:border-emerald-300/40 transition-all duration-300 group"
                  >
                    <div className="p-6 border-b border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                        {t(certificate.header)}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{t(certificate.subheader)}</p>
                    </div>

                    <div className="relative overflow-hidden">
                      <motion.img
                        src={certificate.image}
                        alt={t(certificate.alt)}
                        className="w-full h-auto object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-within:opacity-100">
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="px-4 py-2 accent-button rounded-lg font-medium shadow-lg"
                          onClick={() => window.open(certificate.image, "_blank")}
                        >{t(" View Full Size ")}</motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="surface-card rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">{t("Ready to Work Together?")}</h2>
                <p className="text-gray-300 mb-6 text-pretty">{t(" These certifications represent my commitment to continuous learning and professional growth. Let's discuss how my skills can benefit your next project. ")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 accent-button text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >{t(" Get In Touch ")}</motion.a>
                  <motion.a
                    href="/works"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >{t(" View My Projects ")}</motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
