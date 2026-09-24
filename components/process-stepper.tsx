interface Step {
  number: string
  title: string
  description: string
}

export function ProcessStepper({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-0 border border-rule sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step.number}
          className={`relative flex flex-col gap-4 p-6 md:p-7 ${
            i !== steps.length - 1 ? 'border-b border-rule sm:border-b-0 sm:border-r' : ''
          } ${i === 1 || i === 3 ? 'sm:border-r lg:border-r' : ''}`}
        >
              <span className="font-display text-3xl font-bold text-copper-soft" aria-hidden="true">
            {step.number}
          </span>
          <div>
            <h3 className="font-display text-lg text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
