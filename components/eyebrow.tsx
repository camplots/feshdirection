import { cn } from 'cn'

export function Eyebrow({
  children,
  className,
  tone = 'copper',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'copper' | 'oxblood' | 'ink'
}) {
  const toneClass = tone === 'copper' ? 'text-copper' : tone === 'oxblood' ? 'text-oxblood' : 'text-black'
  return (
    <span className={cn('text-sm font-bold uppercase tracking-[0.2em]', toneClass, className)}>
      {children}
    </span>
  )
}
