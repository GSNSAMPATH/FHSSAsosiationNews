import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Router from './routs/rout.tsx'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Router/>
    </StrictMode>,
  )
} else {
  console.error('Unable to find root element')
}

