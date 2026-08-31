import axios from 'axios'

import type { HeroList } from './schemas'
import { HeroListSchema } from './schemas'

const baseURL = import.meta.env.VITE_API_BASE_URL ?? ''

export async function fetchHeroes() {
  const { data, ...rest } = await axios.get<HeroList>(`${baseURL}/api/heroes`)
  return { data: HeroListSchema.parse(data), ...rest }
}
