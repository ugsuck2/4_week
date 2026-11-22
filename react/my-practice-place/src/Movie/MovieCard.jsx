import './MovieCard.css'

function MovieCard({movie, onSelect}) {

  return(
    <div>
      <div className="movie-card">
        <div className="poster">
          <img src={movie.image} alt={movie.title}></img>
        </div>

        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <h3>{movie.price.toLocaleString()}원</h3>
      </div>

      <button onClick={onSelect}>
        좌석 선택
      </button>
      
    </div>
  )
}

export default MovieCard;