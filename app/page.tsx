import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full overflow-hidden">
      <div className="w-full flex flex-col items-center">
        {/* <Navbar /> */}
        <Hero />
        <Section1 />
        <Section2 />
      </div>
    </main>
  );
}
