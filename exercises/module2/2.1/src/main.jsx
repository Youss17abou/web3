import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './components/ClickCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <ClickCounter title={"Click Counter"} message={"Please click on me now !"} />
  </StrictMode>,
)
