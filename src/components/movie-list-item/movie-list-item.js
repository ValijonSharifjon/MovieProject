import './movie-list-item.css'
import { Component } from 'react'

class MovieListItem extends Component{
  constructor(props){
    super(props)
    this.state={favourite:false,like:false}
  }
  onFavourite=()=>{
    this.setState(prevState=>({
      favourite:!prevState.favourite 
    }))
  }
  onLike=()=>{
    this.setState(prevState=>({
      like:!prevState.like
    }))
  }
  render(){
    const {name,views}=this.props
    const {favourite,like}=this.state
    return (
      <div>
          <li className={`list-group-item d-flex justify-content-between ${favourite && 'color'}`}>
              <span className={`list-group-item-label `}>{name}</span>
              <input type="number" className='list-group-item-input' defaultValue={views}></input>
              <div className='d-flex justify-content-center align-item-center'>
                <button type='button' className='btn-cookie btn-sm' onClick={this.onFavourite}>
                    <i className='fas fa-cookie'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm'>
                    <i className='fas fa-trash'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm' onClick={this.onLike}>
                    <i className={`fas fa-star ${like && 'like'}`}></i>
                </button>
              </div>
          </li>
          <hr></hr>
      </div>
    )
  }
}

// // const MovieListItem = ({name,views}) => {
// //   return (
// //     <div>
// //         <li className='list-group-item d-flex justify-content-between'>
// //             <span className='list-group-item-label'>{name}</span>
// //             <input type="number" className='list-group-item-input' defaultValue={views}></input>
// //             <div className='d-flex justify-content-center align-item-center'>
// //               <button type='button' className='btn-cookie btn-sm'>
// //                   <i className='fas fa-cookie'></i>
// //               </button>
// //               <button type='button' className='btn-cookie btn-sm'>
// //                   <i className='fas fa-trash'></i>
// //               </button>
// //               <button type='button' className='btn-cookie btn-sm'>
// //                   <i className='fas fa-star'></i>
// //               </button>
// //             </div>
// //         </li>
// //         <hr></hr>
// //     </div>
//   )
// }

export default MovieListItem