import { useState } from "react";
import MovieCard from './MovieCard'
import './MovieList.css'
import { useNavigate } from "react-router";
import movies from './MovieData'


function MovieList() {

  let navigate = useNavigate();

  

  return(
    <div>
      <h1>🎬 상영 영화</h1>
        <div className="movie-list">
          {
              movies.map((value,index)=>{
                return(
                <MovieCard movie={value} key={value.id} onSelect={()=>{
                  navigate('/reservation/' + value.id);
                }}></MovieCard>
              )})
          }
        </div>
    </div>
  )
}

export default MovieList;