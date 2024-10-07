import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {
const [currstate,setcurrstate]=useState("Login")

  return (
    <div className='login-popoup'>
        <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{currstate}

        </h2>
        <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
      
    </div>
    <div className="login-popup-inputs">
      {currstate==="Login"?<></>:<input type="text" placeholder='Your name' required />}
      
      <input type="email" placeholder='Your email' required />
      
      <input type="password" placeholder='Password' required />
    </div>
    <button>{currstate==="Sign up"?"Creare an account":"login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" required />
      <p>
        By continuing, i agree to terms of use & privacy policy.
      </p>

    </div>
    {currstate==="Login"
    ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign up")}>Click here</span></p>
    :<p>Already have an account?<span onClick={()=>setcurrstate("Login")}>Login here</span></p>
    
    }
    
    </form>
    </div>
  )
}

export default Loginpopup
