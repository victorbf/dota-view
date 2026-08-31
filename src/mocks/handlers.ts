import { http, HttpResponse } from 'msw'

import { mockCards } from '../data/mockCards'

export const handlers = [
  http.get('/api/heroes', () => {
    return HttpResponse.json(mockCards)
  }),
]
