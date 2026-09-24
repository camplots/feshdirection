import { cn } from 'cn'

export function Section({
  children,
  className,
  bg = 'paper',
  border = true,
}: {
  children: React.ReactNode
  className?: string
  bg?: 'paper' | 'paper-dark' | 'ink' | 'oxblood'
  border?: boolean
}) {
  const bgClass =
    bg === 'paper'
      ? 'bg-paper'
      : bg === 'paper-dark'
        ? 'bg-paper-dark'
        : bg === 'oxblood'
          ? 'bg-oxblood-deep bg-ledger-dark text-paper'
          : 'bg-ink-deep bg-ledger-dark text-paper'
  const borderClass = bg === 'oxblood' || bg === 'ink' ? 'border-b border-black/20' : 'border-b border-rule'
  return (
    <section className={cn(bgClass, border && borderClass)}>
      <div className={cn('mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24', className)}>
        {children}
      </div>
    </section>
  )
}
