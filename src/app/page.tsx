/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center gap-1 dark:text-zinc-100">
      <p>
        Hi there 👋, it's{' '}
        <Link
          href="https://github.com/EdlanioJ"
          target="_blank"
          className="font-bold hover:underline"
        >
          EdlanioJ
        </Link>{' '}
        Portfolio
      </p>
    </main>
  )
}
