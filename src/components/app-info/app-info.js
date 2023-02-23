import './app-info.css'
const AppInfo = ({allMoviesCunt,allLikeMovies}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni:{allMoviesCunt}</p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar soni:{allLikeMovies}</p>

    </div>
  )
}
export default AppInfo