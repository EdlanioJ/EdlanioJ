import { ContactForm } from './ContactForm'
import { ContactSocial } from './ContactSocial'

export function Contacts() {
  return (
    <section id="contact" className="flex w-full flex-col items-center pt-24">
      <div className="container flex h-full flex-col gap-14 pb-16">
        <h1 className="text-5xl font-black uppercase text-teal-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px]">
          GET IN TOUCH
        </h1>

        <div className="flex w-full flex-row justify-between gap-4">
          <div className="flex w-full max-w-md flex-col justify-between gap-4">
            <span className="text-4xl font-semibold">
              Let&apos;s talk about your <br />
              next project.
            </span>

            <span className="text-xl">Let&apos;s work together!</span>

            <ContactSocial />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
