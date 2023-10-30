import { Content } from './Content'
import { Skills } from './Skills'

export function About() {
  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col items-center pt-24"
    >
      <Content />
      <Skills />
    </section>
  )
}
