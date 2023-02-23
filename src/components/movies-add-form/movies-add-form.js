import './movies-add-form.css'
import { Component } from 'react'


class MoviesAddForm extends Component  {
  constructor(props){
    super(props)
    this.state={
      name:'',
      views:''
    }
  }
  onChangeHolder=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  addFormHandler=e=>{
    e.preventDefault()
    this.props.addForm({name:this.state.name,views:this.state.views})
    this.setState({
      name:'',
      views:''
    })
  }

  render (){
    const {name,views}=this.state
    
    return (
      <div className='movies-add-form'>
          <h3>Yangi kino qo'shish</h3>
          <form className='add-form d-flex' onSubmit={this.addFormHandler}>
              <input type="text" className='form-control new-post-label ' placeholder='Qanay kino' onChange={this.onChangeHolder} value={name} name="name"></input>
              <input type="number" className='form-control new-post-label' onChange={this.onChangeHolder} value={views} name="views"></input>
              <button className='btn btn-outline-dark' type="submit">Qo'shish</button>
          </form>
      </div>
    )
  }
}

export default MoviesAddForm