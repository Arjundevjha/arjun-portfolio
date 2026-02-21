import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Leadership } from "@/components/leadership"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Leadership />
      <Testimonials />
      <Footer />
    </main>
  )
}
