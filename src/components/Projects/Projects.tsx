import { Card } from './Card'

export function Projects() {
  return (
    <section
      id="project"
      className="flex h-screen w-full flex-col items-center pt-24"
    >
      <div className="container flex h-full flex-col gap-8">
        <h2 className="text-right text-5xl font-black uppercase text-orange-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px]">
          Projects
        </h2>

        <div className="grid  grid-cols-2 gap-4 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}
