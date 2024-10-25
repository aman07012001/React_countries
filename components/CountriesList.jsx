import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountriesListShimmer from './countriesListShimmer'


export default function CountriesList({ query }) {
  console.log(query)
  let [countriesData,setcountriesData]=useState([])
  useEffect(()=>{ 
    async function Data(){
       let initData= await fetch('https://restcountries.com/v3.1/all') 
      let data= await initData.json();
      if(data.length>0){
        setcountriesData(data)
        console.log("data fetched")
    
      }
  }
    Data()
  },[])
if(countriesData.length===0){
  console.log("entered shimmer")
  return <div><CountriesListShimmer /></div>
}
  return (
    <div className="countries-container">
       {
    countriesData
      .filter((country) => {
        if(query=="Africa"||query=="America"||query=="Asia"||query=="Europe"||query=="Oceania"){
          return country.region.includes(query)
        }
        return country.name.common.toLowerCase().includes(query)
         
      })
      .map((country) => {
        
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })
    }
       </div>
  )
 
}





// function renderCountries(data) {
//   countriesContainer.innerHTML = ''
//   data.forEach((country) => {
//     const countryCard = document.createElement('a')
//     countryCard.classList.add('country-card')
//     countryCard.href = `/country.html?name=${country.name.common}`
//     countryCard.innerHTML = `
//           <img src="${country.flags.svg}" alt="${country.name.common} flag" />
//           <div class="card-text">
//               <h3 class="card-title">${country.name.common}</h3>
//               <p><b>Population: </b>${country.population.toLocaleString(
//                 'en-IN'
//               )}</p>
//               <p><b>Region: </b>${country.region}</p>
//               <p><b>Capital: </b>${country.capital?.[0]}</p>
//           </div>
//   `
//     countriesContainer.append(countryCard)
//   })
// }