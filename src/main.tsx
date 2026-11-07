import { StrictMode, useEffect, type ReactNode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import i18n, { requestedLanguage } from './i18n'

const rootElement = document.getElementById('root')!;

function HydrationLocale({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Parent passive effects run after descendant translation subscriptions register
    // The first render still matches the prerendered document
    if (i18n.resolvedLanguage !== requestedLanguage) i18n.changeLanguage(requestedLanguage);
  }, []);
  return children;
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <HydrationLocale>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </HydrationLocale>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
