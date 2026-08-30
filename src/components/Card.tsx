interface CardProps {
  name: string
  description: string
  attributes: string[]
}

export function Card({ name, description, attributes }: CardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{name}</h2>
      <p className="mb-4 text-slate-600">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {attributes.map((attribute) => (
          <li
            key={attribute}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-800"
          >
            {attribute}
          </li>
        ))}
      </ul>
    </article>
  )
}
