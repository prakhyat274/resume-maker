import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className="navLogo" src="/ui/nav-logo.png" alt="Website logo" />
        <div className='nav-links'>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/builder">BUILD RESUME</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </div>
    </div>
  )
}
