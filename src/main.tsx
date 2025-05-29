import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './screens/DesktopHome/index.css'
import App from './screens/DesktopHome/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
