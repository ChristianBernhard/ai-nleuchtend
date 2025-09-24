import Link from 'next/link'
import clsx from 'clsx'

export function NewsletterButton({ className, ...props }) {
  return (
    <Link
      href="https://steady.page/de/plans/5b0d552d-ce2d-4948-8eb5-2d6bdf8d7722"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group inline-flex items-center justify-center rounded-full py-3 px-6 text-base font-medium',
        'bg-blue-600 text-white hover:bg-blue-700',
        'active:bg-blue-800',
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'transition-all duration-200 ease-in-out',
        'shadow-sm hover:shadow-md',
        'border border-blue-500 hover:border-blue-400',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">📰</span>
        <span>Hier geht&apos;s zum Newsletter</span>
        <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
      </span>
    </Link>
  )
}

export function NewsletterButtonCompact({ className, ...props }) {
  return (
    <Link
      href="https://steady.page/de/plans/5b0d552d-ce2d-4948-8eb5-2d6bdf8d7722"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group inline-flex items-center justify-center rounded-full py-3 px-6 text-base font-semibold',
        'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
        'hover:from-blue-700 hover:to-purple-700 hover:scale-105',
        'active:from-blue-800 active:to-purple-800',
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'transition-all duration-200 ease-in-out',
        'shadow-lg hover:shadow-xl',
        'border-2 border-transparent hover:border-blue-300',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">📰</span>
        <span>KI Newsletter</span>
        <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
      </span>
    </Link>
  )
}
