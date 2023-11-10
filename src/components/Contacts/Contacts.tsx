import { ContactForm } from './ContactForm'
import { ContactSocial } from './ContactSocial'

export function Contacts() {
  return (
    <section id="contact" className="flex w-full flex-col items-center pt-24">
      <div className="container flex h-full flex-col gap-14 px-4 lg:px-0 lg:pb-16">
        <h1 className="text-4xl font-black uppercase text-teal-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:2px]">
          GET IN TOUCH
        </h1>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-flow-row md:grid-cols-2 md:items-end">
          <div className="flex w-full max-w-md flex-col justify-between gap-4 md:col-start-1 md:row-end-1">
            <span className="text-4xl font-semibold">
              Let&apos;s talk about your <br />
              next project.
            </span>

            <span className="text-xl">Let&apos;s work together!</span>
          </div>
          <ContactSocial />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
