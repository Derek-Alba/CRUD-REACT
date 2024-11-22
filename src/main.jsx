import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './js/main.js'
import './scss/style.scss'
import Router from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router/>
  </StrictMode>
)
