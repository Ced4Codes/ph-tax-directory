import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PostHogProvider } from 'posthog-js/react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        capture_exceptions: true,
        capture_pageview: true,
        capture_pageleave: true,
        debug: import.meta.env.MODE === 'development',
      }}
    >
      <App />
    </PostHogProvider>
  </StrictMode>
);
