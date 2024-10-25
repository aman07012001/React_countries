const SelectMenu=({setquery})=>{
  
    return (
        <select onChange={(e)=>{setquery(e.target.value)}} className="filter-by-region">
        <option hidden="">Filter by Region</option>
        <option  value="Africa" >Africa</option>
        <option value="Americas" >America</option>
        <option value="Asia" >Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    
    )
}
export default SelectMenu