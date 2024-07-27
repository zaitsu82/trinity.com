import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}