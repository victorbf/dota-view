import { render, screen } from '@testing-library/react'

import { Title } from './Title'

describe('Title', () => {
  it('renders text as heading', () => {
    render(<Title>Sample Title</Title>)

    expect(screen.getByRole('heading', { name: 'Sample Title' })).toBeInTheDocument()
  })
})
