import React, { useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setshowlogin}) => {
  const [menu,setmenu] =useState("Home")
  return (
    <div className='navbar'>
       <img src={assets.logo} alt="" className="logo" />
       <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setmenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer'onClick={()=>setmenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
       </ul>
       <div className="navbar-right"></div>
       <img src={assets.search_icon} alt="" />
       <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
       </div>
       <button onClick={()=>setshowlogin(true)}>sign in</button>
      
    </div>
  )
}

export default Navbar
