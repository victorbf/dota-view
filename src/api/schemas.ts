import { z } from 'zod'

const NamedEntitySchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const HeroAttributeSchema = NamedEntitySchema
export const HeroTypeSchema = NamedEntitySchema
export const HeroRoleSchema = NamedEntitySchema

export const HeroSchema = z.object({
  name: z.string(),
  description: z.string(),
  attributes: HeroAttributeSchema,
  type: HeroTypeSchema,
  role: z.array(HeroRoleSchema),
})

export const HeroListSchema = z.array(HeroSchema)

export type Hero = z.infer<typeof HeroSchema>
export type HeroList = z.infer<typeof HeroListSchema>
