'use client'

import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Spinner } from '../Spinner'
import toast from 'react-hot-toast'
import { Toast } from '../Toast'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
      form.current as HTMLFormElement,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    )
    console.log({ result })

    if (result.status === 200) {
      toast.custom((t) => (
        <Toast
          heading="Message successfully delivered"
          description="I'll reply as quickly as I can."
          onClose={() => toast.dismiss(t.id)}
        />
      ))
      window.scrollTo({ top: 0, behavior: 'smooth' })
      form.current?.reset()
    } else {
      // TODO: handle error
      toast.custom((t) => (
        <Toast
          heading="Message not delivered"
          description="Please try again later."
          onClose={() => toast.dismiss(t.id)}
        />
      ))
    }

    setIsLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="flex w-full flex-col gap-4 shadow-md md:col-start-2 md:row-span-2 md:max-w-md [&>*]:px-4 [&>*]:py-2 [&>*]:text-gray-50 [&>*]:outline-none [&>*]:ring-0 [&>button]:h-12 [&>input]:h-12 [&>input]:bg-gray-700 [&>textarea]:bg-gray-700"
    >
      <input
        type="text"
        required
        name="name"
        id="name"
        placeholder="FullName"
      />
      <input
        type="email"
        required
        name="email"
        id="email"
        placeholder="E-mail"
      />

      <textarea
        name="message"
        required
        placeholder="Message"
        className="resize-none"
        rows={8}
      ></textarea>

      <button
        type="submit"
        disabled={isLoading}
        className="flex w-full items-center justify-center bg-orange-500 font-semibold transition-colors hover:bg-orange-500/75 disabled:bg-orange-500/60"
      >
        {isLoading ? <Spinner /> : 'Send'}
      </button>
    </form>
  )
}
