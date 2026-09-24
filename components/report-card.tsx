import { Mark } from '@/components/site-header'

export function ReportCard({
  title,
  fieldLabel,
  fieldValue,
  stampLabel,
  tilt = 'right',
}: {
  title: string
  fieldLabel: string
  fieldValue: string
  stampLabel: string
  tilt?: 'right' | 'left'
}) {
  return (
    <div
      className={`relative w-full max-w-sm border border-ink/15 bg-card p-6 shadow-[8px_8px_0_0_var(--ink-deep)] md:p-8 ${
        tilt === 'right' ? 'rotate-1' : '-rotate-1'
      }`}
    >
      <span
        className="absolute -top-3 -left-3 size-6 border-t-2 border-l-2 border-copper"
        aria-hidden="true"
      />
      <span
        className="absolute -right-3 -bottom-3 size-6 border-r-2 border-b-2 border-copper"
        aria-hidden="true"
      />
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <Mark />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
          Confidential
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{title}</h3>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-dashed border-rule pt-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
            {fieldLabel}
          </p>
          <p className="mt-1.5 text-sm text-ink">{fieldValue}</p>
        </div>
        <span className="-rotate-6 border-2 border-copper bg-copper-mist px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-copper-deep">
          {stampLabel}
        </span>
      </div>
    </div>
  )
}
