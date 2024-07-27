import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Corporate } from "@/components/Corporate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Corporate />
      <Footer />
    </div>
  );
}