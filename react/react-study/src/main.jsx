import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Quiz01 from './quiz01/Quiz01.jsx'
// import NewsBlog from './newsblog/NewsBlog.jsx'
// import Props02 from './components/Props02.jsx'
// import Quiz03 from './quiz03/Quiz03.jsx'
// import Props01 from './components/Props01'
// import TempApp from './TempApp.jsx'
import Quiz04_2 from './quiz/quiz04/Quiz04_2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz04_2/>
    {/* <Quiz01 /> */}
    {/* <ProductInfo /> */}
    {/* <TempApp /> */}
  </StrictMode>,
)
