import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prac6 from './practice/261119/Prac6'
import Prac7 from './practice/261119/Prac7'
import Prac1 from './practice/261121/Prac1'
import Prac3 from './practice/261121/Prac3'
import Prac4 from './practice/261121/Prac4'
import {BrowserRouter} from 'react-router'
import Prac5 from './practice/261121/Prac5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Prac5 />
    </BrowserRouter>
    
  </StrictMode>,
)
