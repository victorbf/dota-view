import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import './index.css'

const queryClient = new QueryClient()

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    return worker.start({ onUnhandledRequest: 'bypass' })
  }
}

const rootElement = document.getElementById('root')

if (rootElement) {
  const app = (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )

  enableMocking()
    .then(() => {
      if (rootElement.hasChildNodes()) {
        hydrateRoot(rootElement, app)
      } else {
        createRoot(rootElement).render(app)
      }
    })
    .catch((err) => {
      console.error('[MSW] Failed to start service worker:', err)
      if (rootElement.hasChildNodes()) {
        hydrateRoot(rootElement, app)
      } else {
        createRoot(rootElement).render(app)
      }
    })
}
