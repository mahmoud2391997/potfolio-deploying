import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron } from 'next/font/google'; // Add this line
import Script from "next/script";

const orbitron = Orbitron({ subsets: ['latin'] }); // Add this line

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-full min-h-screen h-auto bg-[#080808] flex flex-col items-center justify-center relative font-sans ${orbitron.className}`}> {/* Add orbitron class */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ENK7E6LPW1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ENK7E6LPW1');
        `}
      </Script>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
