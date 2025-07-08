import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Dynamically import the certifications component
const CertificationsContent = dynamic(() => import('@/components/certifications-content'))

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'View my professional certifications and achievements in web development, programming, and technology.',
}

export default function Certifications() {
  return (
    <div className="min-h-screen pt-20">
      <CertificationsContent />
    </div>
  )
}