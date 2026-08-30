import type { HeroAttribute, HeroRole, HeroType } from '../../data/heroData'

export interface CardProps {
  name: string
  description: string
  attributes: HeroAttribute
  type: HeroType
  role: HeroRole[]
}
