import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterHome from './router_quiz/RouterHome'
import {BrowserRouter} from 'react-router'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RouterHome />
    </BrowserRouter>
  </StrictMode>,
)
