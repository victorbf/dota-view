import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

describe('App routes', () => {
  it('renders welcome page content on root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Welcome to Dota View' })).toBeInTheDocument()
  })

  it('renders three hero cards on list route', () => {
    render(
      <MemoryRouter initialEntries={['/list']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Hero List' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Axe' })).toBeInTheDocument()
  })
})
