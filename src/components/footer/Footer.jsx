import React from 'react'
import logo from '../../media/logo.png'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="upper">
        <div className="footerlogo">
            <p className="fln"><span>Agro</span> Seva</p>
            <img src={logo} alt="" />
        </div>
        <div className="footerabout">
            <ul className="falist">
                <li className="falisttit">About Agroseva</li>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
        <div className="footerabout">
            <ul className="falist">
                <li className="falisttit">Our services</li>
                <li>CEV</li>
                <li>ODC</li>
                <li>PRAVAIG</li>
            </ul>
        </div>
        <div className="footercontact">
            <p className="fchead">Feel free to contact</p>
            <p className="mob"><BiPhoneCall/> +91 6567656757</p>
            <p className="mail"><AiOutlineMail/>     agroseva@gmail.com</p>
        </div>
      </div>
      <div className="lower">
        
      </div>
    </div>
  )
}

// BiPhoneCall
export default Footer
