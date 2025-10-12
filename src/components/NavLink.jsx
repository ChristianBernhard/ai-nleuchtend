import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, children, highlighted = false }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block rounded-lg px-2 py-1 text-sm transition-all",
        highlighted 
          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800" 
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      {children}
    </Link>
  )
}
