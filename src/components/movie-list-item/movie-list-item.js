import './movie-list-item.css'

const MovieListItem = ({name,views}) => {
  return (
    <div>
        <li className='list-group-item d-flex justify-content-between'>
            <span className='list-group-item-label'>{name}</span>
            <input type="number" className='list-group-item-input' defaultValue={views}></input>
            <div className='d-flex justify-content-center align-item-center'>
              <button type='button' className='btn-cookie btn-sm'>
                  <i className='fas fa-cookie'></i>
              </button>
              <button type='button' className='btn-cookie btn-sm'>
                  <i className='fas fa-trash'></i>
              </button>
              <button type='button' className='btn-cookie btn-sm'>
                  <i className='fas fa-star'></i>
              </button>
            </div>
        </li>
        <hr></hr>
    </div>
  )
}

export default MovieListItem