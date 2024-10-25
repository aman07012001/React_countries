
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"
import { ThemeContext } from "./contexts/themeContext"
const App = () => {
   let [isDark,setisDark]=useState(JSON.parse(localStorage.getItem("isDarkMode")))
   
   return (
      <ThemeContext.Provider value={[isDark,setisDark]} >
      <Header />,
     <Outlet  />
     </ThemeContext.Provider>
   )

}
export default App