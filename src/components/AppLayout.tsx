import { Link, Outlet, useRouterState } from '@tanstack/react-router'
import PWABadge from '../PWABadge'

export function AppLayout() {
  const matches = useRouterState({
    select: (state) => state.matches,
  })

  const currentPath = matches[matches.length - 1]?.fullPath ?? '/'

  return (
    <div className="mx-auto min-h-screen max-w-3xl p-6">
      <header className="mb-6 space-y-2">
        <h1 className="text-3xl font-semibold">Mx Open Gym Tracker</h1>
        <p className="text-sm opacity-80">Such app, wow</p>
      </header>

      <nav className="mb-8 flex gap-3">
        <Link to="/" className={currentPath === '/' ? 'font-bold underline' : 'underline'}>
          Dashboard
        </Link>
        <Link to="/sync" className={currentPath === '/sync' ? 'font-bold underline' : 'underline'}>
          Repository Sync
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <PWABadge />
    </div>
  )
}