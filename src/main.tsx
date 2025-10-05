import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WestCoastCelebrantsModern from './Website.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WestCoastCelebrantsModern />
  </StrictMode>
)
