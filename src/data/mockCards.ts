import { AttributeId, HeroRoleId, HeroTypeId, heroAttributes, heroRoles, heroTypes } from './heroData'

export interface CardData {
  name: string
  description: string
  attributes: (typeof heroAttributes)[AttributeId]
  type: (typeof heroTypes)[HeroTypeId]
  role: Array<(typeof heroRoles)[HeroRoleId]>
}

export const mockCards: CardData[] = [
  {
    name: 'Axe',
    description: 'Durable initiator that excels in close combat skirmishes.',
    attributes: heroAttributes[AttributeId.Strength],
    type: heroTypes[HeroTypeId.Melee],
    role: [heroRoles[HeroRoleId.Offlaner]],
  },
  {
    name: 'Crystal Maiden',
    description: 'Reliable support with strong crowd control and mana sustain.',
    attributes: heroAttributes[AttributeId.Intelligence],
    type: heroTypes[HeroTypeId.Ranged],
    role: [heroRoles[HeroRoleId.SoftSupport], heroRoles[HeroRoleId.HardSupport]],
  },
  {
    name: 'Phantom Assassin',
    description: 'Mobile carry with high burst potential and evasive movement.',
    attributes: heroAttributes[AttributeId.Agility],
    type: heroTypes[HeroTypeId.Melee],
    role: [heroRoles[HeroRoleId.HardCarry]],
  },
]
