import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const { page, onLinkClick } = props;

  return (
    <div className={`navbar ${page==="home"?"home":"other"}`}>
        <img className="navLogo" src="/ui/nav-logo.png" alt="Website logo" />
        <div className='nav-links'>
            <ul>
                <li><Link onClick={()=>onLinkClick("home")} to="/">HOME</Link></li>
                <li><Link onClick={()=>onLinkClick("other")} to="/builder">BUILD RESUME</Link></li>
                <li><Link onClick={()=>onLinkClick("other")} to="/login">LOGIN</Link></li>
            </ul>
        </div>
    </div>
  )
}
