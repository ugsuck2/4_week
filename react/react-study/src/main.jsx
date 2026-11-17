import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz01 from './quiz01/Quiz01.jsx'
import Props02 from './components/Props02.jsx'
// import Props01 from './components/Props01'
// import TempApp from './TempApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Props02/>
    {/* <Quiz01 /> */}
    {/* <ProductInfo /> */}
    {/* <TempApp /> */}
  </StrictMode>,
)
