import { notFound } from 'next/navigation'
import ErrorContent from './ErrorContent'


const ERROR_CONFIG = {
  'not-found': {
    icon: 'Frown',
    iconColor: 'text-red-500',
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    action: { label: 'Go Home', href: '/' },
  },
  'message-failed': {
    icon: 'AlertTriangle',
    iconColor: 'text-yellow-500',
    title: 'Message Sending Failed',
    description: 'There was a problem sending your message. Please try again later.',
    action: { label: 'Try Again', href: '/contact' },
  },
  'something-went-wrong': {
    icon: 'XCircle',
    iconColor: 'text-red-500',
    title: 'Something Went Wrong',
    description: 'An unexpected error occurred. Please try again.',
    action: { label: 'Go Home', href: '/' },
  },
  'network-error': {
    icon: 'WifiOff',
    iconColor: 'text-orange-500',
    title: 'Network Error',
    description: 'Unable to connect. Please check your internet connection and try again.',
    action: { label: 'Retry', href: '/contact' },
  },
} as const

const ERROR_TYPES = ['not-found', 'message-failed', 'something-went-wrong', 'network-error'] as const
type ErrorType = typeof ERROR_TYPES[number]

function isErrorType(key: string): key is ErrorType {
  return ERROR_TYPES.includes(key as ErrorType)
}

export default async function ErrorPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  
  if (!isErrorType(type)) {
    return notFound()
  }
  
  const config = ERROR_CONFIG[type]
  return <ErrorContent config={config} />
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  
  if (!isErrorType(type)) {
    return {}
  }
  
  const config = ERROR_CONFIG[type]
  return {
    title: config.title,
    description: config.description,
  }
}
