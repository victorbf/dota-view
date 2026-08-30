import { Link } from 'react-router-dom'

import { Title } from '../components/Title'

export function WelcomePage() {
  return (
    <section>
      <Title>Welcome to Dota View</Title>
      <p className="mb-6 max-w-2xl text-slate-700">
        Explore a simple hero card catalog with reusable components, routing, and Tailwind styles.
      </p>
      <Link
        className="inline-flex rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800"
        to="/list"
      >
        View Hero List
      </Link>
    </section>
  )
}
