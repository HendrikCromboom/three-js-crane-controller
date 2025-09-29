import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CraneController from './modules/cranecontroller.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Remove this wrapper temporarily */}
    <CraneController />
  </StrictMode>,
)
