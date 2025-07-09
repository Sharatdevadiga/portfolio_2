import ContactForm from '@/components/contact-form'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sharath Devadiga for collaboration opportunities, projects, or just to say hello.',
}

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <ContactForm />
    </div>
  )
}