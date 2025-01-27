import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Component1 from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1 />
  </StrictMode>,
)
