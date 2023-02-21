import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data}) => {
  return (
    <div class="movie-list">
        {data.map(item=>(
          <MovieListItem name={item.name} views={item.views}/>
        ))}
    </div>
  )
}

export default MovieList