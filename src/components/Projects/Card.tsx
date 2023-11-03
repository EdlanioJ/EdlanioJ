import Image from 'next/image'
import { ZigIcon } from '../icons'
import { Code, Radio } from 'lucide-react'

export function Card() {
  return (
    <div className="group relative aspect-square bg-gray-700 shadow-lg">
      <Image alt="Cover" src="/rinha.jpeg" className="h-full w-full" fill />
      <div className="absolute inset-0 hidden bg-zinc-900 bg-opacity-30 bg-clip-padding backdrop-blur-md backdrop-filter group-hover:block" />
      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center bg-gray-800/60">
        <ZigIcon className="h-6 w-6" />
      </div>
      <div className="absolute bottom-0 hidden w-full bg-gradient-to-b from-transparent to-gray-900/60 p-4 group-hover:block">
        <h2 className="font-bold uppercase">Rinha de compiler</h2>
        <p className="truncate text-sm">Project description</p>
        <div className="mt-2 flex gap-2">
          <a
            target="_blank"
            className="flex h-8 w-24 items-center justify-center gap-2 bg-teal-500 text-xs font-semibold transition-colors hover:bg-teal-500/75"
            href="https://github.com/EdlanioJ"
          >
            <Code /> Code
          </a>
          <a
            target="_blank"
            className="flex h-8 w-24 items-center justify-center gap-2 bg-orange-500 text-xs font-semibold  transition-colors hover:bg-orange-500/75"
            href="https://github.com/EdlanioJ"
          >
            <Radio /> Live
          </a>
        </div>
      </div>
    </div>
  )
}
