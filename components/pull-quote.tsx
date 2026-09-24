export function PullQuote({
  children,
  cite,
}: {
  children: React.ReactNode
  cite?: string
}) {
  return (
    <figure className="relative border-l-[3px] border-copper bg-copper-mist/40 py-5 pl-6 md:py-6 md:pl-8">
      <span
        className="pointer-events-none absolute -top-3 right-4 font-display text-6xl text-copper/15 select-none md:text-7xl"
        aria-hidden="true"
      >
        &rdquo;
      </span>
      <blockquote className="relative font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="relative mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-oxblood">
          — {cite}
        </figcaption>
      )}
    </figure>
  )
}
