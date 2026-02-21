import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Buffer } from 'buffer';
import process from 'process';
import { routeTree } from './routeTree';
import './styles/app.css';
import { registerServiceWorker } from './services/offline';

if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}

if (!globalThis.process) {
  globalThis.process = process;
}

const router = createRouter({
  routeTree,
  context: {
    appName: 'MX Open Gym Tracker',
  },
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
