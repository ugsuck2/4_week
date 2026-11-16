import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductInfo from './quiz00/ProductInfo'
// import TempApp from './TempApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductInfo />
    {/* <TempApp /> */}
  </StrictMode>,
)
