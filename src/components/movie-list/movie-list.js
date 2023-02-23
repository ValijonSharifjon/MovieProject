import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data,onDelete,onFavourite,onLike}) => {
  return (
    <div class="movie-list">
        {data.map(item=>(
          <MovieListItem name={item.name} views={item.views} favourite={item.favourite} like={item.like} onDelete={()=>{onDelete(item.id)}} onFavourite={()=>{onFavourite(item.id)}} onLike={()=>{onLike(item.id)}}/>
        ))}
    </div>
  )
}

export default MovieList