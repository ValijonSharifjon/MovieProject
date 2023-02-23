import './App.css'
import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {name:"Empire of Osman",views:989,id:1,favourite:false,like:false},
                {name:"Ertugru",views:400,id:2,favourite:false,like:false},
                {name:"Elparvar",views:600,id:3,favourite:false,like:false},
            ],
            term:'',
            filter:'',
        }
    }
    
    onDelete=(id)=>{
        this.setState(({data})=>({
            data:data.filter(c=>c.id!==id)
        }))
    }

    addForm=item=>{
        const newItem={name:item.name,views:item.views,id:uuidv4(),favourite:false,like:false}
        this.setState(({data})=>({
            data:[...data,newItem]
        }))
    }

    onFavourite=id=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if(item.id===id){
                    return {...item,favourite:!item.favourite}
                }
                return item
            })
        }))
    }

    onLike=id=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if (item.id===id){
                    return{...item,like:!item.like}
                }
                return item
            })
        }))
    }

    searchHandler=(arr,term)=>{
        if(term.length===0){
            return arr
        }
        return arr.filter(item=>item.name.toLowerCase().indexOf(term)>-1)
    }

    updateTerm=(term)=>{
        this.setState({
            term:term
        })
    }

    filterHandler=(arr,filter)=>{
        switch (filter){
            case 'popular':
                return arr.filter(c=>c.like)
            case 'mostViews':
                return arr.filter(c=>c.views>500)
            default:
                return arr        
        }
    }

    updateFilterHandler=(filter)=>{
        this.setState({
            filter:filter
        })
    }

    render (){
        const {data,term,filter}=this.state
        const allMoviesCunt=this.state.data.length
        const allLikeMovies=data.filter(c=>c.like).length
        const visibleData=this.filterHandler(this.searchHandler(data,term),filter)
        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo allMoviesCunt={allMoviesCunt} allLikeMovies={allLikeMovies}/>
                    <div className='search-panel'>
                        <SearchPanel searchHandler={this.searchHandler} updateTerm={this.updateTerm}/>
                        <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
                    </div>
                    <MovieList data={visibleData} onDelete={this.onDelete} onFavourite={this.onFavourite} onLike={this.onLike}/>
                    <MoviesAddForm addForm={this.addForm}/>
                </div>
            </div>
        )
    }
}
export default App