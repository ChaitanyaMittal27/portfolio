import Providers from "@/components/Providers";
import BackgroundGlow from "@/components/BackgroundGlow";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <BackgroundGlow />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Hobbies />
      </main>
      <Footer />
    </Providers>
  );
}
