'use client'

import { backEndSkills, frontEndSkills } from './data'
import { SkillCategory } from './SkillCategory'

export function Skills() {
  return (
    <div className="w-full divide-y-2 divide-gray-900 bg-gray-700">
      <SkillCategory skills={frontEndSkills} title="Front-End" />
      <SkillCategory skills={backEndSkills} title="Back-End" isReverse />
    </div>
  )
}
