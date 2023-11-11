import { Card } from './Card'
import { projects } from './data'

export function Projects() {
  return (
    <section
      id="project"
      className="flex min-h-screen w-full flex-col items-center pt-24"
    >
      <div className="container flex h-full flex-col gap-8 px-4 lg:px-0">
        <h2 className="text-right text-4xl font-black uppercase text-orange-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px]">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {projects.map((project, key) => (
            <Card key={key} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
