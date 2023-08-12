import React, { useEffect, useState } from 'react'
import "./intro.scss"
import { FcDonate } from "react-icons/fc";
import { BsShare } from "react-icons/bs";
import VerticalTabs from '../../verticaltab/VerticalTabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Modals from '../../modal/Modals';
import { useList } from '../../context/listContext';

const Intro = () => {
    const [list] = useList();
    function valuetext(value) {
        return `${value}°C`;
    }
    valuetext(90);
    const [lgShow, setLgShow] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [fund, setFund] = useState(0);
    const [per, setPer] = useState(0);
    const [sup, setSup] = useState(0);
    const [array, setArray] = useState([]);
    const [donors, setDonors] = useState([]);
    useEffect(() => {
        setTotalAmount(Number(list.amount));
        let totalFund = 0;
        let count = 0;
        let arr = [];
        list['donors']?.forEach((sum) => {
            count++;
            totalFund += Number(sum.amount);
            arr.push({amount:Number(sum.amount) ,name:sum['contact']?.name});
        })
        setFund(totalFund);
        setSup(count);
        setArray(arr.sort((a, b) => b.amount - a.amount).slice(0, 4));
        setDonors(arr);
        
        // setArray(arr);
    }, [list]);
    useEffect(()=>{
        if(fund && totalAmount)setPer(Math.floor((Number(fund) / Number(totalAmount)) * 100));
    }, [fund, totalAmount]);
    // const top4 = array.sort((a, b) => b - a).slice(0, 4);
    // console.log(array);
    return (
        <div className='introcon'>
            <div className="headintro">
                <div className="headtitle">
                    {list.campaign_title}
                </div>
                <div className="lr">
                    <div className="lefthi">
                        <img src={list?.campaign_image_url} alt="" />
                    </div>
                    <div className="righthi">
                        <ProgressBar variant="success" now={per} />
                        <p className="percentage">{per}% funded</p>
                        <p className="righttitle">Future Now 2023 Fund</p>
                        <div className="titledesc">
                            <span className="l">
                                <p className='num'>Rs {fund}</p>
                                <p className="den">raised of Rs {totalAmount}</p>
                            </span>
                            <span className="r">
                                <p className="n">{sup}</p>
                                <p className="supp">supporters</p>
                            </span>
                        </div>
                        <div className="btn">
                            <button className="donate" onClick={() => setLgShow(true)}>
                                <FcDonate />  Donate now
                            </button>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg text-center" className='text-center'>
                                        AgroSeva
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body><Modals /></Modal.Body>
                            </Modal>
                            <button className="share">
                                <BsShare />
                                <span>   Share now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line1"></div>
            <p className="fabtit">Top Donor's</p>
            <div className="line2"></div>
            <div className="topdonor">
                {
                    array?.map((ele) =>
                        (
                        <div className="contd">
                            <div className="boxtd">
                                <FcDonate className='sym' size={70} />
                                <p className="td">Top Donation</p>
                                <p className="tdname">{ele.name.substr(0, 12)}</p>
                                <p className="donated">Rs{ele.amount} donated</p>
                            </div>
                        </div>
                        )                    
                    )
                }
                {/* <div className="contd">
                    <div className="boxtd">
                        <FcDonate className='sym' size={70} />
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
                <div className="contd">
                    <div className="boxtd">
                        <FcDonate className='sym' size={70} />
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div>
                <div className="contd">
                    <div className="boxtd">
                        <FcDonate className='sym' size={70} />
                        <p className="td">Top Donation</p>
                        <p className="tdname">Jame Margot</p>
                        <p className="donated">$950,000 donated</p>
                    </div>
                </div> */}
            </div>
            <div className="atp">
                <div className="leftatp">
                    <h1>About this project</h1>
                    <p className="about">{list.campaign_description}</p>
                    <img src={list.campaign_image_url} alt="" />
                    <VerticalTabs />
                </div>
                <div className="rightatp">
                    <h1>Recent donations</h1>
                    {
                        donors.map((ele)=>(
                            <div className="don">
                        <p className="amount">Rs {ele.amount}</p>
                        <p className="name">{ele.name.substr(0, 12)}</p>
                        <hr />
                    </div>
                        ))
                    }
                    {/* <div className="don">
                        <p className="amount">$2000</p>
                        <p className="name">James Bond</p>
                        <hr />
                    </div>
                    <div className="don">
                        <p className="amount">$2000</p>
                        <p className="name">James Bond</p>
                        <hr />
                    </div>
                    <div className="don">
                        <p className="amount">$2000</p>
                        <p className="name">James Bond</p>
                        <hr />
                    </div>
                    <div className="don">
                        <p className="amount">$2000</p>
                        <p className="name">James Bond</p>
                        <hr />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Intro
