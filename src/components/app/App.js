import './App.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
const App=()=>{
    const data=[
        {name:"Empire of Osman",views:989},
        {name:"Ertugru",views:400},
        {name:"Elparvar",views:600}
    ]
    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data}/>
                <MoviesAddForm/>
            </div>
        </div>
    )
}
export default App