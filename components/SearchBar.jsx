const SearchBar=({setquery})=>{
  
    return( <div className="search-container">
      <input onChange ={(e)=>{setquery(e.target.value.toLowerCase())}} type="text" placeholder="Country"></input>
    </div>
    )
}

export default SearchBar