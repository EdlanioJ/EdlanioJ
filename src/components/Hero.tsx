/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export function Hero() {
  const firstText = useRef<HTMLDivElement>(null)
  const secondText = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(firstText.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
      x: '-400px',
    })

    gsap.to(secondText.current, {
      x: '400px',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
    })
  }, [])
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute left-0 top-0 -z-10 block w-full">
        <div
          style={{ '--vh': 100 } as any}
          className="block h-screen w-full overflow-hidden text-left text-[calc(var(--vh)/100*73.5vh)] font-black uppercase leading-[.7] text-gray-700 [font-stretch:semi-condensed]"
        >
          <div
            ref={firstText}
            className="mx-[-2.5%] w-[105%] whitespace-nowrap"
          >
            Edlanio Júlio
          </div>
          <div
            ref={secondText}
            className="mx-[-100%] w-[105%] whitespace-nowrap "
          >
            FullStack DEV
          </div>
        </div>
      </div>
      <div className="px-4 text-xl font-black uppercase md:px-0 md:text-3xl lg:text-5xl">
        <p className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1px] md:[-webkit-text-stroke-width:2px]">
          Hi there
        </p>
        <h1 className="leading-snug">
          I'm <span className="text-teal-500">E</span>dlâneo{' '}
          <span className="text-orange-500">J</span>úlio.
          <br /> A <span className="text-teal-500">Full-Stack</span> Developer
          <br />
          based in <span className="text-orange-500">Luanda</span>, Angola.
        </h1>
      </div>
    </section>
  )
}
