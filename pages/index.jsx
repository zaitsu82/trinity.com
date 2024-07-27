import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { FirstViwe } from "@/components/FirstView";
import { About } from "@/components/About";
import { Corporate } from "@/components/Corporate";
import { Service } from "@/components/Service";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <FirstViwe />
      <About />
      <Corporate />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}
