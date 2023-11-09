import { Linkedin, Mail, Phone } from 'lucide-react'

export function ContactSocial() {
  return (
    <div className="flex flex-col gap-4 text-sm [&>a>div>p]:font-medium">
      <a
        href="mailto:edlanioj@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 items-center divide-x-2 divide-gray-900 bg-gray-700 transition-colors hover:bg-gray-700/80 [&>*]:h-full"
      >
        <div className="flex w-12 items-center justify-center">
          <Mail className="text-teal-500" />
        </div>
        <div className="flex flex-col justify-center pl-3">
          <p>Mail me at</p>
          <strong>edlanioj@gmail.com</strong>
        </div>
      </a>
      <a
        href="https://wa.me/244921299139"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 items-center divide-x-2 divide-gray-900 bg-gray-700 transition-colors hover:bg-gray-700/80 [&>*]:h-full"
      >
        <div className="flex w-12 items-center justify-center">
          <Phone className="text-teal-500" />
        </div>
        <div className="flex flex-col justify-center pl-3">
          <p>Whatsapp direct message</p>
          <strong>Edlâneo Júlio</strong>
        </div>
      </a>

      <a
        href="https://linkedin.com/in/edlanioj"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 items-center divide-x-2 divide-gray-900 bg-gray-700 transition-colors hover:bg-gray-700/80 [&>*]:h-full"
      >
        <div className="flex w-12 items-center justify-center">
          <Linkedin className="text-teal-500" />
        </div>
        <div className="flex flex-col justify-center pl-3">
          <p>Connect at LinkedIn</p>
          <strong>Edlâneo Mutino</strong>
        </div>
      </a>
    </div>
  )
}
