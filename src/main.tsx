import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AreaProvider } from './context/AreaContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AreaProvider>
      <App />
    </AreaProvider>
  </StrictMode>,
)
