import React from 'react'
import './land.scss'
import grass from '../../media/logo.png'
import video from '../../media/Grass.mp4'

const Land = () => {
  return (
    <div className='Navbar'>
    {/* <video autoplay loop muted playsInline className="back-video">
        <source src={video} type='video/mp4'/>  
    </video> */}
    <video src={video} autoPlay loop muted className='back-video'/>
      <navbar className="nav">
        <img src={grass} alt="" srcset="" />
        <ul className='list'>
            <li className="home">HOME</li>
            <li className="contact">CONTACT</li>
            <li className="about">ABOUT</li>
        </ul>
      </navbar>

      <p className="heading"> <span className='agro'>Agro</span><span className='seva'>Seva</span></p>
      <button>Explore</button>
    </div>
  )
}

export default Land
