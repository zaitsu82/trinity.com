import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { FirstViwe } from "@/components/FirstView";
import { FadeInBottom } from "@/components/Wapper";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FirstViwe />
        <div className="p-96 bg-">

        </div>
      </main>
      <Footer />
    </div>
  );
}
