import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <main className="w-full text-zinc-100">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
