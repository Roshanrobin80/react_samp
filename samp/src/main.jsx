import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Component1 from './App.jsx'
import Parent from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Component1 /> */}
    <Parent/>
  </StrictMode>,
)
