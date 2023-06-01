import React from 'react'
import './loginForm.css'

export default function Register(props) {
    props.onLinkClick("other")
  return (
    <div className='loginPage'>
        <div className='loginCard'>
            <h1 style={{textAlign:"center", marginBottom:"20px", fontWeight:"lighter"}}>Welcome</h1>
            <label>Enter Your Name</label>
            <div className='inputSection' style={{display:"flex", justifyContent:"space-between"}}>
                <input style={{marginRight:"6px"}} type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <label>Your Email</label>
            <div className='inputSection'>
                <div className='imgWrapper'><img src="/ui/user.png" alt="user Icon" /></div>
                <input type="text" placeholder='e.g abc@example.com'/>
            </div>
            <label>Your Password</label>
            <div className='inputSection'>
                <div className='imgWrapper'><img src="/ui/key.png" alt="user Icon" /></div>
                <input type="password" placeholder='e.g ilovemaggi123'/>
            </div>
            <label>Confirm Password</label>
            <div className='inputSection'>
                <div className='imgWrapper'><img src="/ui/key.png" alt="user Icon" /></div>
                <input type="password" placeholder='Confirm Password'/>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"10px 0"}}>
                <button className='loginBtn' style={{fontSize:"20px", cursor:"pointer"}}>Sign Up</button>
            </div>
            <a href="/login" style={{color:"blue", textDecoration:"underline", textAlign:"center"}}>Already have an account?</a>
        </div>
    </div>
  )
}
