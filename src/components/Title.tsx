interface TitleProps {
  children: string
}

export function Title({ children }: TitleProps) {
  return <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">{children}</h1>
}
