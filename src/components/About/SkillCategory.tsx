'use client'
/* eslint-disable react-hooks/exhaustive-deps */

import { type ReactNode, useLayoutEffect, useRef, RefObject } from 'react'
import gsap from 'gsap'

import { SkillType } from './data'

type Props = {
  title: string
  isReverse?: boolean
  skills: SkillType[]
}

type TitleProps = {
  children: ReactNode
}
function CategoryTitle({ children }: TitleProps) {
  return (
    <div className="flex items-center justify-between px-6 text-center text-4xl uppercase">
      <strong className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px]">
        {children}
      </strong>
    </div>
  )
}

export function SkillCategory({ isReverse, skills, title }: Props) {
  const firstElement = useRef<HTMLDivElement>(null)
  const secondElement = useRef<HTMLDivElement>(null)

  let xPercent = 0
  const direction = isReverse ? 1 : -1

  useLayoutEffect(() => {
    requestAnimationFrame(animation)
  }, [])

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstElement.current, { xPercent })
    gsap.set(secondElement.current, { xPercent })

    xPercent += 0.1 * direction
    requestAnimationFrame(animation)
  }

  function renderSkills(ref: RefObject<HTMLDivElement>) {
    return (
      <div ref={ref} className="flex gap-6 pl-6">
        {skills.map(({ icon: Icon, name }) => (
          <div key={name} className="flex items-center gap-2">
            {isReverse ? (
              <>
                <span className="truncate">{name}</span>
                <Icon className="h-10 w-10 fill-gray-50" />
              </>
            ) : (
              <>
                <Icon className="h-10 w-10 fill-gray-50" />
                <span className="truncate">{name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex h-24 divide-x-2 divide-gray-900">
      {isReverse ? (
        <>
          <div className="flex w-full flex-1 items-center overflow-hidden text-4xl">
            {renderSkills(firstElement)}
            {renderSkills(secondElement)}
          </div>
          <CategoryTitle>{title}</CategoryTitle>
        </>
      ) : (
        <>
          <CategoryTitle>{title}</CategoryTitle>
          <div className="flex w-full flex-1 items-center overflow-hidden text-4xl">
            {renderSkills(firstElement)}
            {renderSkills(secondElement)}
          </div>
        </>
      )}
    </div>
  )
}
