import React from 'react'
import './navbar.scss'
import grass from '../../media/logo.png'
import video from '../../media/Grass.mp4'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navtitle">
        <img src={grass} alt="" />
        <p className="navtit"><span className='agro'>Agro</span> Seva</p>
      </div>
      <ul className="navlist">
        <li className="navhome">HOME</li>
        <li className="navcontact">CONTACT</li>
        <li className="navabout">ABOUT</li>
      </ul>
    </div>
  )
}

export default Navbar
