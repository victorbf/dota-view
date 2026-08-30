import { render, screen } from '@testing-library/react'

import { Card } from './Card'

describe('Card', () => {
  it('renders name, description, and attributes', () => {
    render(
      <Card
        attributes={['Carry', 'Melee']}
        description="High damage scaling hero"
        name="Juggernaut"
      />,
    )

    expect(screen.getByRole('heading', { name: 'Juggernaut' })).toBeInTheDocument()
    expect(screen.getByText('High damage scaling hero')).toBeInTheDocument()
    expect(screen.getByText('Carry')).toBeInTheDocument()
    expect(screen.getByText('Melee')).toBeInTheDocument()
  })
})
