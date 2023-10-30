import { About } from '@/components/About'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <main className="w-full text-zinc-100">
      <Hero />
      <About />
    </main>
  )
}
