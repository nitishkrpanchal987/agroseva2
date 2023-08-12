import React from 'react'
import './navbar.scss'
import grass from '../../media/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="navtitle" onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}>
        <img src={grass} alt="" />
        <p className="navtit"><span className='agro'>Agro</span> Seva</p>
      </div>
      <ul className="navlist">
        <li className="navhome"><Link to='/' style={{textDecoration:'none', color:'inherit'}}>HOME</Link></li>
        <li className="navcontact"><Link to='/contact' style={{textDecoration:'none', color:'inherit'}}>CONTACT</Link></li>
        <li className="navabout"><Link to='/about' style={{textDecoration:'none', color:'inherit'}}>ABOUT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
