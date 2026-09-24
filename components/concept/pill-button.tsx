import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function PillButton({
  href,
  children,
  variant = 'dark',
}: {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
}) {
  const classes =
    variant === 'dark'
      ? 'border-black bg-black text-white hover:bg-white hover:text-black'
      : 'border-black bg-white text-black hover:bg-black hover:text-white'
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border-[3px] ${classes} px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors`}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  )
}
