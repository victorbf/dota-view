import type { CardProps } from './types'

export function Card({ name, description, attributes, type, role }: CardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{name}</h2>
      <p className="mb-4 text-slate-600">{description}</p>
      <ul className="flex flex-wrap gap-2">
        <li className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-800">
          {attributes.name}
        </li>
        <li className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-800">
          {type.name}
        </li>
        {role.map((heroRole) => (
          <li
            key={heroRole.id}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-800"
          >
            {heroRole.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
