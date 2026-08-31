import axios from 'axios'

import type { HeroList } from './schemas'
import { HeroListSchema } from './schemas'

export async function fetchHeroes(): Promise<HeroList> {
  const { data } = await axios.get<unknown>('/api/heroes')
  return HeroListSchema.parse(data)
}
