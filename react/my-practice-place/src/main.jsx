import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prac6 from './practice/261119/Prac6'
import Prac7 from './practice/261119/Prac7'
import Prac1 from './practice/261121/Prac1'
import Prac3 from './practice/261121/Prac3'
import Prac4 from './practice/261121/Prac4'
import {BrowserRouter,Route,Routes} from 'react-router'
import Prac5 from './practice/261121/Prac5'
import MovieList from './Movie/MovieList'
import Reservation from './Movie/Reservation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
