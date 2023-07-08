import React from 'react'
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./intro.scss"
import photo from "../../media/campaignR.jpeg"
import { FcDonate } from "react-icons/fc";
import { BsShare } from "react-icons/bs";

const Intro = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    valuetext(90);
    return (
        <div className='introcon'>
            <div className="headintro">
            <div className="headtitle">
                Dragon fruit farming
            </div>
            <div className="lr">
                <div className="lefthi">
                    <img src={photo} alt="" />
                </div>
                <div className="righthi">
                <div className="slider">
                    <div className="sliderinside" style={{width:'80%'}}></div>
                </div>
                    <p className="percentage">79% funded</p>
                    <p className="righttitle">Future Now 2023 Fund</p>
                    <div className="titledesc">
                        <span className="l">
                            <p className='num'>$3453</p>
                            <p className="den">raised of $844734</p>
                        </span>
                        <span className="r">
                            <p className="n">12</p>
                            <p className="supp">supporters</p>
                        </span>
                    </div>
                    <div className="btn">
                        <button className="donate">
                            <FcDonate/>  Donate now
                        </button>
                        <button className="share">
                        <BsShare/>
                            Share Now
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="line1"></div>
            <p className="fabtit">Top Donor's</p>
            <div className="line2"></div>
            <div className="topdonor">
                <div className="contd">
                    <div className="boxtd">
                    <FcDonate className='sym' size={70}/> 
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
                <div className="contd">
                    <div className="boxtd">
                    <FcDonate className='sym' size={70}/>
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
                <div className="contd">
                    <div className="boxtd">
                    <FcDonate className='sym' size={70}/>
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
                <div className="contd">
                    <div className="boxtd">
                    <FcDonate className='sym' size={70}/>
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
