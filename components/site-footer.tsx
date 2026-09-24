import Link from 'next/link'
import { footerNav } from '@/lib/nav'

const YELLOW = '#F5F65A'

const allLinks = [
  ...footerNav.products,
  ...footerNav.company,
  ...footerNav.learn,
  ...footerNav.legal,
]

export function SiteFooter() {
  return (
    <footer className="grid border-t-[3px] border-black md:grid-cols-2" style={{ backgroundColor: YELLOW }}>
      <div className="border-b-[3px] border-black px-6 py-14 md:border-r-[3px] md:border-b-0 md:px-12 md:py-20">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight">About Watts Better</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed font-medium">
          Seven years of independent solar guidance and thousands of appointments. We help you
          decide before you buy, and verify after it&apos;s built — funded by an introducer fee,
          not by steering you toward any one installer.
        </p>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">
          Independent Solar Decisions
        </p>
      </div>
      <div className="flex flex-col justify-between px-6 py-14 md:px-12 md:py-20">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold uppercase tracking-wide">
          {allLinks.map((item) => (
            <Link key={item.label} href={item.href} className="underline hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm font-semibold">
          © {new Date().getFullYear()} Watts Better. Independent, always.
        </p>
      </div>
    </footer>
  )
}
