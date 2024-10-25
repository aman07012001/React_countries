import {  useParams } from "react-router-dom";
import CountryCard from "./CountryCard"
import countriesData from "../countriesData";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const CountryDetails=()=>{
let params = useParams().country
const [isDark]=useContext(ThemeContext)
return(
countriesData
   .filter((country) =>{
 return country.name.common.includes(params)
} ).map((country) => {
  return (
  <main className={`${isDark?"main-dark":""}`}>
  <CountryCard
  key={country.name.common}
  name={country.name.common}
  flag={country.flags.svg}
  population={country.population}
  region={country.region}
  capital={country.capital?.[0]}
/>
</main>

  )}
))}
export default CountryDetails

