import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About.tsx'
import Four from './Pages/Four.tsx'
import One from './Pages/One.tsx'
import Three from './Pages/Three.tsx'
import Two from './Pages/Two.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
