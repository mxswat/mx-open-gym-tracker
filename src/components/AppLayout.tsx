import { Link, Outlet, useRouterState } from '@tanstack/react-router';

export function AppLayout() {
  const matches = useRouterState({
    select: (state) => state.matches,
  });

  const currentPath = matches[matches.length - 1]?.fullPath ?? '/';

  return (
    <div className="app-shell">
      <header>
        <h1>MX Open Gym Tracker</h1>
        <p>Offline-first training log with headless git sync.</p>
      </header>

      <nav>
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>
          Dashboard
        </Link>
        <Link to="/sync" className={currentPath === '/sync' ? 'active' : ''}>
          Repository Sync
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
