import React from 'react'
import './navbar.scss'
import grass from '../../media/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navtitle">
        <img src={grass} alt="" />
        <p className="navtit"><span className='agro'>Agro</span> Seva</p>
      </div>
      <ul className="navlist">
        <li className="navhome"><Link to='/' style={{textDecoration:'none', color:'inherit'}}>HOME</Link></li>
        <li className="navcontact"><Link to='/' style={{textDecoration:'none', color:'inherit'}}>CONTACT</Link></li>
        <li className="navabout"><Link to='/' style={{textDecoration:'none', color:'inherit'}}>ABOUT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
