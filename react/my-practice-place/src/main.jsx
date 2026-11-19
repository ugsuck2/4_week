import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prac6 from './practice/261119/Prac6'
import Prac7 from './practice/261119/Prac7'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prac7 />
  </StrictMode>,
)
