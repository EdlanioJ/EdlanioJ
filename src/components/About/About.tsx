import { Content } from './Content'
import { Skills } from './Skills'

export function About() {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center pt-24 lg:h-screen"
    >
      <Content />
      <Skills />
    </section>
  )
}
