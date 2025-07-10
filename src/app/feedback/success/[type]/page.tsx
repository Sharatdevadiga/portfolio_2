import { notFound } from 'next/navigation'
import SuccessContent from './SuccessContent'


const SUCCESS_CONFIG = {
  'message-sent': {
    icon: 'ThumbsUp',
    iconColor: 'text-green-500',
    title: 'Message Sent Successfully!',
    description: 'Thank you for reaching out. I will get back to you soon.',
    action: { label: 'Back to Home', href: '/' },
  }
} as const

const SUCCESS_TYPES = ['message-sent'] as const
type SuccessType = typeof SUCCESS_TYPES[number]

function isSuccessType(key: string): key is SuccessType {
  return SUCCESS_TYPES.includes(key as SuccessType)
}

export default async function SuccessPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  
  if (!isSuccessType(type)) {
    return notFound()
  }
  
  const config = SUCCESS_CONFIG[type]
  return <SuccessContent config={config} />
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  
  if (!isSuccessType(type)) {
    return {}
  }
  
  const config = SUCCESS_CONFIG[type]
  return {
    title: config.title,
    description: config.description,
  }
}
