import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/AppDownload/Appdownload'

const Home = () => {
  const[category,setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>

      
    </div>
  )
}

export default Home
