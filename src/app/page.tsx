import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Currently } from "@/components/currently"
import { Projects } from "@/components/projects"
import { Capabilities } from "@/components/capabilities"
import { Experience } from "@/components/experience"
import { Journey } from "@/components/journey"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F2F2F0] selection:bg-primary/30 selection:text-primary font-sans antialiased">
      <Navbar />
      <Hero />
      <Currently />
      <Projects />
      <Capabilities />
      <Experience />
      <Journey />
      <Footer />
    </main>
  )
}
