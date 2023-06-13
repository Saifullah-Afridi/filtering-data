
import React, { useEffect } from 'react'
import Restaurant from './component/restaurantComponents/Restaurant';
// import Footer from './component/Basics/Footer';


const App=()=>{
  useEffect(()=>{
    document.title = "Usman Restaurant";
  })
return(
  <div>
    <Restaurant/>

  </div>
)
}

export default App;
