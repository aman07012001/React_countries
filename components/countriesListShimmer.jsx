export default function CountriesListShimmer(){
    return(
        
        
         <div className="countries-container"> 
            {Array.from({length:10}).map((ele)=> <div className="country-card-shimmer "></div>)}
        </div>
     
        
        
    )
}