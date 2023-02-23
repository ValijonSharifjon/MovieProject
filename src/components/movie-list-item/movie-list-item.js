import './movie-list-item.css'
import { Component } from 'react'



 const MovieListItem =({name,views,favourite,like,onDelete,onFavourite,onLike})=>{
  return(
    <div>
          <li className={`list-group-item d-flex justify-content-between ${favourite && 'color'}`}>
              <span className={`list-group-item-label `}>{name}</span>
              <input type="number" className='list-group-item-input' defaultValue={views}></input>
              <div className='d-flex justify-content-center align-item-center'>
                <button type='button' className='btn-cookie btn-sm' onClick={onFavourite}>
                    <i className='fas fa-cookie'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm' onClick={onDelete}>
                    <i className='fas fa-trash'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm' onClick={onLike}>
                    <i className={`fas fa-star ${like && 'like'}`}></i>
                </button>
              </div>
          </li>
          <hr></hr>
      </div>
  )
 }

export default MovieListItem