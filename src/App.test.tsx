import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

function renderWithProviders(ui: React.ReactElement, { initialEntries = ['/'] } = {}) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
    </QueryClientProvider>,
  )
}

describe('App routes', () => {
  it('renders welcome page content on root route', () => {
    renderWithProviders(<App />)

    expect(screen.getByRole('heading', { name: 'Welcome to Dota View' })).toBeInTheDocument()
  })

  it('renders three hero cards on list route', async () => {
    renderWithProviders(<App />, { initialEntries: ['/list'] })

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Hero List' })).toBeInTheDocument()
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
      expect(screen.getByRole('heading', { name: 'Axe' })).toBeInTheDocument()
    })
  })
})
