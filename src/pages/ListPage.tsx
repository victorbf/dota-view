import { useQuery } from '@tanstack/react-query'

import { fetchHeroes } from '../api/heroes'
import { Card } from '../components/Card'
import { Title } from '../components/Title'

export function ListPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['heroes'],
    queryFn: fetchHeroes,
    select: (res) => res.data,
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading heroes.</p>

  return (
    <section>
      <Title>Hero List</Title>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((hero) => (
          <Card
            key={hero.name}
            attributes={hero.attributes}
            description={hero.description}
            name={hero.name}
            role={hero.role}
            type={hero.type}
          />
        ))}
      </div>
    </section>
  )
}
