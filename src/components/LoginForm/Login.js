import React from 'react'
import './loginForm.css'

export default function Login(props) {
    props.onLinkClick("other")
  return (
    <div className='loginPage'>
        <div className='loginCard'>
        <h1 style={{textAlign:"center",marginBottom:"20px", fontWeight:"lighter"}}>Good to see you Again</h1>
            <label>Your Email</label>
            <div className='inputSection'>
                <div className='imgWrapper'><img src="/ui/user.png" alt="user Icon" /></div>
                <input type="text" placeholder='e.g abc@example.com'/>
            </div>
            <label>Your Password</label>
            <div className='inputSection'>
                <div className='imgWrapper'><img src="/ui/key.png" alt="user Icon" /></div>
                <input type="text" placeholder='e.g ilovemaggi123'/>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"10px 0"}}>
                <button className='loginBtn' style={{fontSize:"20px", cursor:"pointer"}}>Login</button>
            </div>
            <a href="/register" style={{color:"blue", textDecoration:"underline", textAlign:"center"}}>Don't have an account?</a>
        </div>
    </div>
  )
}
