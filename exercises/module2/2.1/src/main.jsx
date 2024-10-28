import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './components/ClickCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <ClickCounter title={"Click Counter"} message={"You are a master in the art of clicking !"} />
  </StrictMode>,
)
