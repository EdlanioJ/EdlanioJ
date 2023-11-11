export type Project = {
  name: string
  description: string
  lang: 'node' | 'zig'
  image?: string
  codeUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Rinha de Compiler',
    description: 'Compiler para linguagem de programação Rinha',
    lang: 'zig',
    image: '/images/rinha.jpeg',
    codeUrl: 'https://github.com/EdlanioJ/rinha-zig',
  },
]
