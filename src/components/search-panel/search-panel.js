 import './search-panel.css'
 import { Component } from 'react'
 class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state={
      term:''
    }
  }
  updateTerm=(e)=>{
    const term=e.target.value
    this.setState({term})
    this.props.updateTerm(term.toLowerCase())
  }
  render(){
    return (
      <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish..." onChange={this.updateTerm} value={this.state.term}></input>
    )
  }
}
export default SearchPanel