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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FirstViwe />
        <Corporate />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
