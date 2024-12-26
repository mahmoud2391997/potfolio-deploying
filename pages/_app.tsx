import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron } from 'next/font/google'; // Add this line

const orbitron = Orbitron({ subsets: ['latin'] }); // Add this line

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-full min-h-screen h-auto bg-[#080808] flex flex-col items-center justify-center relative font-sans ${orbitron.className}`}> {/* Add orbitron class */}
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
