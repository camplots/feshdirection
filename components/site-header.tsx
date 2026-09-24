'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sun, ArrowRight } from 'lucide-react'
import { primaryNav } from '@/lib/nav'

export function Mark({
  className = '',
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'light'
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-9 shrink-0 items-center justify-center rounded-full border-[3px] ${
        tone === 'light' ? 'border-white bg-transparent text-white' : 'border-black bg-white text-black'
      } ${className}`}
    >
      <Sun className="size-5" strokeWidth={2.5} />
    </span>
  )
}

export function Wordmark({
  className = '',
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'light'
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Mark tone={tone} />
      <span
        className={`text-lg font-extrabold uppercase tracking-tight md:text-xl ${
          tone === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        Watts Better
      </span>
    </span>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-white">
      <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" aria-label="Watts Better home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide lg:flex"
        >
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
          <Link href="/contact-us" className="transition-opacity hover:opacity-60">
            Contact
          </Link>
        </nav>

        <Link
          href="/calculator"
          className="hidden items-center gap-2 rounded-full border-[3px] border-black bg-black px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black lg:inline-flex"
        >
          Get started
          <ArrowRight className="size-4" />
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border-[3px] border-black bg-white lg:hidden"
        >
          {open ? <X className="size-4" strokeWidth={2.5} /> : <Menu className="size-4" strokeWidth={2.5} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t-[3px] border-black bg-white px-5 py-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {[...primaryNav, { label: 'Contact', href: '/contact-us' }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/calculator"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-[3px] border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            Get started
            <ArrowRight className="size-4" />
          </Link>
        </nav>
      )}
    </header>
  )
}
