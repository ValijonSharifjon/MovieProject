import './app-filter.css'
const AppFilter=({updateFilterHandler,filter})=>{
    return (
        <div className="btn-group">
        {btnsArr.map(item=>(
            <button key={item.name} className={`btn ${filter===item.name?'btn-dark':'btn-outline-dark'}`} type="button" onClick={()=>updateFilterHandler(item.name)} >{item.label}</button>
        ))}
    </div>
    )
}

const btnsArr=[
    {name:"all",label:"Barcha kinolar"},
    {name:"popular",label:"Mashhur kinolar"},
    {name:"mostViews",label:"Eng ko'p kurilgan kinolar"}
]
export default AppFilter