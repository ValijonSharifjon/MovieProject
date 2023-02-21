import './movies-add-form.css'

const MoviesAddForm = () => {
  return (
    <div className='movies-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex'>
            <input type="text" className='form-control new-post-label' placeholder='Qanay kino'></input>
            <input type="number" className='form-control new-post-label'></input>
            <button className='btn btn-outline-dark' type="button">Qo'shish</button>
        </form>
    </div>
  )
}

export default MoviesAddForm