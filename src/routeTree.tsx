import { RootRoute, Route } from '@tanstack/react-router';
import { AppLayout } from './components/AppLayout';
import { HomeRoute } from './routes/HomeRoute';
import { SyncRoute } from './routes/SyncRoute';

const rootRoute = new RootRoute({
  component: AppLayout,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeRoute,
});

const syncRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sync',
  component: SyncRoute,
});

export const routeTree = rootRoute.addChildren([homeRoute, syncRoute]);
