import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Service } from "@/components/Service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Service />
      <Footer />
    </div>
  );
}