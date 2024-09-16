import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen h-auto bg-[#080808] flex flex-col items-center justify-center relative font-sans">
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
