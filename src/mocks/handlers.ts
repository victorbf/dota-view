import { http, HttpResponse } from 'msw'

import { mockCards } from '../data/mockCards'

const baseURL = import.meta.env.VITE_API_BASE_URL ?? ''

export const handlers = [
  http.get(`${baseURL}/api/heroes`, () => {
    return HttpResponse.json(mockCards)
  }),
]
