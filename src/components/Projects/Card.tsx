import Image from 'next/image'
import { ZigIcon } from '../icons'
import { Code, Radio } from 'lucide-react'
import { Project } from './data'

type Props = {
  project: Project
}

export function Card({ project }: Props) {
  return (
    <div className="group relative aspect-square bg-gray-700 shadow-lg max-md:w-full max-md:max-w-xs">
      <Image alt="Cover" src="/rinha.jpeg" className="h-full w-full" fill />
      <div className="absolute inset-0 hidden bg-zinc-900 bg-opacity-30 bg-clip-padding backdrop-blur-md backdrop-filter group-hover:block" />
      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center bg-gray-800/60">
        {project.lang === 'zig' && <ZigIcon className="h-6 w-6" />}
      </div>
      <div className="absolute bottom-0 hidden w-full bg-gradient-to-b from-transparent to-gray-900/60 p-4 group-hover:block">
        <h2 className="font-bold uppercase">{project.name}</h2>
        <p className="truncate text-sm">{project.description}</p>
        <div className="mt-2 flex gap-2 [&>a]:flex [&>a]:h-8 [&>a]:w-20 [&>a]:items-center [&>a]:justify-center  [&>a]:gap-1 [&>a]:text-xs [&>a]:font-semibold [&>a]:transition-colors">
          {project.codeUrl && (
            <a
              target="_blank"
              className="bg-teal-500 hover:bg-teal-500/75"
              href={project.codeUrl}
            >
              <Code className="h-4 w-4" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              target="_blank"
              className="bg-orange-500 hover:bg-orange-500/75"
              href={project.liveUrl}
            >
              <Radio className="h-4 w-4" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
