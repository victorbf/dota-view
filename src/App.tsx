import { Link, Route, Routes } from 'react-router-dom'

import { ListPage } from './pages/ListPage'
import { WelcomePage } from './pages/WelcomePage'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-5xl">
        <nav className="mb-8 flex gap-4">
          <Link className="font-semibold text-blue-700 hover:text-blue-900" to="/">
            Welcome
          </Link>
          <Link className="font-semibold text-blue-700 hover:text-blue-900" to="/list">
            List
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
