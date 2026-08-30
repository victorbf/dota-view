import { render, screen } from '@testing-library/react'

import { Card } from './Card'
import { AttributeId, HeroRoleId, HeroTypeId, heroAttributes, heroRoles, heroTypes } from '../../data/heroData'

describe('Card', () => {
  it('renders name, description, attributes, type, and role', () => {
    render(
      <Card
        attributes={heroAttributes[AttributeId.Agility]}
        description="High damage scaling hero"
        name="Juggernaut"
        role={[heroRoles[HeroRoleId.HardCarry]]}
        type={heroTypes[HeroTypeId.Melee]}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Juggernaut' })).toBeInTheDocument()
    expect(screen.getByText('High damage scaling hero')).toBeInTheDocument()
    expect(screen.getByText('Agility')).toBeInTheDocument()
    expect(screen.getByText('Melee')).toBeInTheDocument()
    expect(screen.getByText('Hard carry')).toBeInTheDocument()
  })
})
