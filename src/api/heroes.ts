import axios from 'axios'

import type { HeroList } from './schemas'
import { HeroListSchema } from './schemas'

export async function fetchHeroes() {
  const { data, ...rest } = await axios.get<HeroList>('/api/heroes')
  return { data: HeroListSchema.parse(data), ...rest }
}
