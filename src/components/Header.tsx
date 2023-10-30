'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const links = [
  {
    text: 'Home',
    href: '#home',
  },
  {
    text: 'ABOUT',
    href: '#about',
  },
  {
    text: 'PROJECTS',
    href: '#project',
  },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [showBG, setShowBG] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setShowBG(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleToggleOpen() {
    setOpen(!open)
  }

  function handleClose() {
    if (!open) return
    setOpen(false)
  }

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-30 mb-0 flex w-full justify-center text-slate-200',
        {
          'max-md:bg-zinc-900 max-md:bg-opacity-30 max-md:bg-clip-padding max-md:backdrop-blur-md max-md:backdrop-filter':
            open,
          'bg-zinc-900 bg-opacity-30 bg-clip-padding backdrop-blur-md backdrop-filter':
            showBG,
        },
      )}
    >
      <div className="container flex h-16 w-full items-center justify-between">
        <Link
          href="#home"
          className="text-3xl font-black uppercase text-teal-500"
        >
          E<span className="text-orange-500">J</span>
        </Link>

        <button
          type="button"
          onClick={handleToggleOpen}
          className={clsx(
            'relative hidden h-7 w-7 max-md:block',
            'after:my-1 after:block after:h-1 after:w-full after:bg-white after:transition-all after:duration-300',
            'before:my-1 before:block before:h-1 before:w-full before:bg-white before:transition-all before:duration-300',
            {
              'before:translate-x-[-6px] before:translate-y-[12px] before:-rotate-45':
                open,
              'after:translate-x-[-6px] after:translate-y-[-7px] after:rotate-45':
                open,
            },
          )}
        >
          <div
            className={clsx(
              'my-1 h-1 w-full bg-white transition-all duration-300',
              {
                'opacity-0': open,
              },
            )}
          />
        </button>

        <nav
          onClick={handleClose}
          className={clsx(
            'flex items-center p-0 max-md:absolute max-md:left-0 max-md:top-full max-md:block max-md:h-0 max-md:w-full max-md:flex-col max-md:overflow-hidden',
            {
              'max-md:h-screen max-md:bg-zinc-900 max-md:bg-opacity-40 max-md:bg-clip-padding max-md:backdrop-blur-lg max-md:backdrop-filter':
                open,
            },
          )}
        >
          <ul className="flex text-sm uppercase max-md:container  max-md:mx-auto max-md:flex-col max-md:py-4">
            {links.map((link) => (
              <li key={link.text}>
                <Link
                  className="flex h-10 w-24 items-center justify-center hover:bg-gray-900/75 hover:text-teal-500"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="flex h-10 items-center bg-orange-500 px-4 font-semibold uppercase text-white shadow-2xl transition-colors hover:bg-orange-500/75"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
