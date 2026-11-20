import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Quiz01 from './quiz01/Quiz01.jsx'
import NewsBlog from './newsblog/NewsBlog.jsx'
// import Props02 from './components/Props02.jsx'
// import Quiz03 from './quiz03/Quiz03.jsx'
// import Props01 from './components/Props01'
// import TempApp from './TempApp.jsx'
// import Quiz05 from './quiz/quiz05/Quiz05.jsx'
import FoodMarket from './foodmarket/FoodMarket.jsx'
import Quiz06 from './quiz/quiz06/Quiz06.jsx'
import {BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FoodMarket></FoodMarket> */}
    {/* <NewsBlog></NewsBlog> */}
    {/* <Quiz01 /> */}
    {/* <ProductInfo /> */}
    {/* <TempApp /> */}
    {/* <Quiz06></Quiz06> */}
    <BrowserRouter>
      <FoodMarket></FoodMarket>
    
    </BrowserRouter>
  </StrictMode>,
)
