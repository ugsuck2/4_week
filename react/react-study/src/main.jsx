import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz01 from './quiz01/Quiz01.jsx'
// import TempApp from './TempApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz01 />
    {/* <ProductInfo /> */}
    {/* <TempApp /> */}
  </StrictMode>,
)
