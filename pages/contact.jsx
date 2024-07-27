import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}