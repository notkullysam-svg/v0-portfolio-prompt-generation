import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectShowcase />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
