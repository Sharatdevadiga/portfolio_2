import { notFound } from 'next/navigation'
import { CheckCircle, AlertTriangle, Info, ThumbsUp, Frown } from 'lucide-react'
import FeedbackContent, { FeedbackConfig } from './FeedbackContent'

const FEEDBACK_CONFIG = {
  error: {
    'not-found': {
      icon: Frown,
      iconColor: 'text-red-500',
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      action: { label: 'Go Home', href: '/' },
    },
    'message-failed': {
      icon: AlertTriangle,
      iconColor: 'text-yellow-500',
      title: 'Message Sending Failed',
      description: 'There was a problem sending your message. Please try again later.',
      action: { label: 'Try Again', href: '/contact' },
    },
    'something-went-wrong': {
      icon: Info,
      iconColor: 'text-orange-500',
      title: 'Something Went Wrong',
      description: 'An unexpected error occurred. Please try again.',
      action: { label: 'Go Home', href: '/' },
    },
  },
  success: {
    'message-sent': {
      icon: ThumbsUp,
      iconColor: 'text-green-500',
      title: 'Message Sent Successfully!',
      description: 'Thank you for reaching out. I will get back to you soon.',
      action: { label: 'Back to Home', href: '/' },
    },
    other: {
      icon: CheckCircle,
      iconColor: 'text-blue-500',
      title: 'Success!',
      description: 'Your action was completed successfully.',
      action: { label: 'Go Home', href: '/' },
    },
  },
} as const

const STATUS_KEYS = ['error', 'success'] as const
const ERROR_TYPES = ['not-found', 'message-failed', 'something-went-wrong'] as const
const SUCCESS_TYPES = ['message-sent', 'other'] as const

type StatusKey = typeof STATUS_KEYS[number]
type ErrorType = typeof ERROR_TYPES[number]
type SuccessType = typeof SUCCESS_TYPES[number]

function isStatusKey(key: string): key is StatusKey {
  return STATUS_KEYS.includes(key as StatusKey)
}
function isErrorType(key: string): key is ErrorType {
  return ERROR_TYPES.includes(key as ErrorType)
}
function isSuccessType(key: string): key is SuccessType {
  return SUCCESS_TYPES.includes(key as SuccessType)
}

export default async function FeedbackPage({ params }: { params: Promise<{ status: string; type: string }> }) {
  const { status, type } = await params
  let config: FeedbackConfig | undefined
  if (isStatusKey(status)) {
    if (status === 'error' && isErrorType(type)) {
      config = FEEDBACK_CONFIG.error[type]
    } else if (status === 'success' && isSuccessType(type)) {
      config = FEEDBACK_CONFIG.success[type]
    }
  }
  if (!config || typeof config.icon !== 'function') return notFound()
  return <FeedbackContent config={config} />
}

export async function generateMetadata({ params }: { params: Promise<{ status: string; type: string }> }) {
  const param= await params
  console.log("param", param)
  const { status, type } = param
  let config: FeedbackConfig | undefined
  if (isStatusKey(status)) {
    if (status === 'error' && isErrorType(type)) {
      config = FEEDBACK_CONFIG.error[type]
    } else if (status === 'success' && isSuccessType(type)) {
      config = FEEDBACK_CONFIG.success[type]
    }
  }
  if (!config) return {}
  return {
    title: config.title,
    description: config.description,
  }
}
