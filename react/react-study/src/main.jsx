import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz01 from './quiz01/Quiz01.jsx'
import State02 from './components/State02.jsx'
// import TempApp from './TempApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State02/>
    {/* <Quiz01 /> */}
    {/* <ProductInfo /> */}
    {/* <TempApp /> */}
  </StrictMode>,
)
