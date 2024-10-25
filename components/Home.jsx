import CountriesList from "./CountriesList"
import SearchBar from "./SearchBar.jsx"
import SelectMenu from "./SelectMenu.jsx"
import CountriesList from "./CountriesList"
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/themeContext.js"



const Home=()=>{
    const [query,setquery]=useState("")
    const [isDark,setisDark]=useContext(ThemeContext)
    return(
        <main className={`${isDark?"main-dark":""}`}>
            
            <div className="search-filter-container">
            <SearchBar key={1} setquery={setquery}/>
            <SelectMenu key={2} setquery={setquery}/>
            </div>
           <CountriesList  key={3} query={query}/>
          
         </main>
   
        
    )
}

export default Home;