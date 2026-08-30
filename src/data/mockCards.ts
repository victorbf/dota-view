export interface CardData {
  name: string
  description: string
  attributes: string[]
}

export const mockCards: CardData[] = [
  {
    name: 'Axe',
    description: 'Durable initiator that excels in close combat skirmishes.',
    attributes: ['Strength', 'Initiator', 'Durable'],
  },
  {
    name: 'Crystal Maiden',
    description: 'Reliable support with strong crowd control and mana sustain.',
    attributes: ['Intelligence', 'Support', 'Disabler'],
  },
  {
    name: 'Phantom Assassin',
    description: 'Mobile carry with high burst potential and evasive movement.',
    attributes: ['Agility', 'Carry', 'Escape'],
  },
]
