export const AttributeId = {
  Strength: 1,
  Agility: 2,
  Intelligence: 3,
  Universal: 4,
} as const

export const HeroTypeId = {
  Melee: 1,
  Ranged: 2,
} as const

export const HeroRoleId = {
  HardCarry: 1,
  MidLaner: 2,
  Offlaner: 3,
  SoftSupport: 4,
  HardSupport: 5,
} as const

export type AttributeId = (typeof AttributeId)[keyof typeof AttributeId]
export type HeroTypeId = (typeof HeroTypeId)[keyof typeof HeroTypeId]
export type HeroRoleId = (typeof HeroRoleId)[keyof typeof HeroRoleId]

export interface HeroAttribute {
  id: AttributeId
  name: string
}

export interface HeroType {
  id: HeroTypeId
  name: string
}

export interface HeroRole {
  id: HeroRoleId
  name: string
}

export const heroAttributes: Record<AttributeId, HeroAttribute> = {
  [AttributeId.Strength]: { id: AttributeId.Strength, name: 'Strength' },
  [AttributeId.Agility]: { id: AttributeId.Agility, name: 'Agility' },
  [AttributeId.Intelligence]: { id: AttributeId.Intelligence, name: 'Intelligence' },
  [AttributeId.Universal]: { id: AttributeId.Universal, name: 'Universal' },
}

export const heroTypes: Record<HeroTypeId, HeroType> = {
  [HeroTypeId.Melee]: { id: HeroTypeId.Melee, name: 'Melee' },
  [HeroTypeId.Ranged]: { id: HeroTypeId.Ranged, name: 'Ranged' },
}

export const heroRoles: Record<HeroRoleId, HeroRole> = {
  [HeroRoleId.HardCarry]: { id: HeroRoleId.HardCarry, name: 'Hard carry' },
  [HeroRoleId.MidLaner]: { id: HeroRoleId.MidLaner, name: 'Mid laner' },
  [HeroRoleId.Offlaner]: { id: HeroRoleId.Offlaner, name: 'Offlaner' },
  [HeroRoleId.SoftSupport]: { id: HeroRoleId.SoftSupport, name: 'Soft support' },
  [HeroRoleId.HardSupport]: { id: HeroRoleId.HardSupport, name: 'Hard support' },
}
