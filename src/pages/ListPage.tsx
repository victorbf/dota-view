import { Card } from '../components/Card'
import { Title } from '../components/Title'
import { mockCards } from '../data/mockCards'

export function ListPage() {
  return (
    <section>
      <Title>Hero List</Title>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockCards.map((hero) => (
          <Card
            key={hero.name}
            attributes={hero.attributes}
            description={hero.description}
            name={hero.name}
          />
        ))}
      </div>
    </section>
  )
}
