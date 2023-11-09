import { About } from '@/components/About'
import { Contacts } from '@/components/Contacts'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <main className="w-full text-zinc-100">
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  )
}
