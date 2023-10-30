import {
  CssIcon,
  DockerIcon,
  GolangIcon,
  HtmlIcon,
  JSIcon,
  NodeIcon,
  PrismaIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  TestIcon,
  TSIcon,
} from '../icons'

export const frontEndSkills = [
  { name: 'Html', icon: HtmlIcon },
  { name: 'CSS', icon: CssIcon },
  { name: 'Javascript', icon: JSIcon },
  { name: 'Typescript', icon: TSIcon },
  { name: 'ReactJS', icon: ReactIcon },
  { name: 'TailwindCSS', icon: TailwindIcon },
]

export const backEndSkills = [
  { name: 'NodeJS', icon: NodeIcon },
  { name: 'Javascript', icon: JSIcon },
  { name: 'Typescript', icon: TSIcon },
  { name: 'Prisma', icon: PrismaIcon },
  { name: 'Golang', icon: GolangIcon },
  { name: 'Sql DB', icon: SQLIcon },
  { name: 'Tests', icon: TestIcon },
  { name: 'Docker', icon: DockerIcon },
]

export type SkillType = (typeof frontEndSkills)[0]
