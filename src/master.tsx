import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './test/App.tsx'
import "./global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
