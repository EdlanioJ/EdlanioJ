/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export function Content() {
  return (
    <div className="container flex h-full max-w-full flex-col gap-8 px-4 pb-8 lg:px-0 lg:pb-0">
      <h2 className=" text-4xl font-black uppercase text-teal-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1px] lg:[-webkit-text-stroke-width:2px]">
        About
      </h2>
      <div className="flex h-full flex-col-reverse items-center justify-center gap-8 lg:flex-row">
        <div className="max-w-2xl text-lg">
          <p>
            An enthusiastic full-stack developer, passionate about unraveling
            technological challenges and crafting innovative solutions.
          </p>
          <br />
          <p>
            I'm always on the lookout to level up my skills and take on complex
            challenges, believing that innovation is the key to success.
          </p>
        </div>
        <Image
          alt="Edlâneo Júlio image"
          width={320}
          height={320}
          className="[box-shadow:#00ADB5_-16px_-16px_0px_0px,#EE6D4D_16px_16px_0px_0px]"
          src="https://github.com/edlanioj.png"
          priority
        />
      </div>
    </div>
  )
}
