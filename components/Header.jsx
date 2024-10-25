import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

 
const Header = () => {
    
    const [isDark,setisDark]=useContext(ThemeContext);
    console.log(isDark)

    return (
<>
        <header className={`header-container ${isDark?"dark":""}`} >
            <div className="header-content">
                <div> <h2 className="title">
                    <a href="/"><p>Where In The World</p></a>
                </h2></div>
               
                <p onClick={()=>{
                    setisDark(!isDark)
                    localStorage.setItem("isDarkMode",!isDark)

                }} className="theme-changer">
                    <i className="fa-regular fa-moon" />
                    &nbsp; &nbsp; Dark Mode
                </p>
            </div>
        </header>
</>
    )
}

export default Header