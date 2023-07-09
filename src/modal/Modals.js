import React from 'react'
import Button from 'react-bootstrap/Button';
import "./modal.scss"
import { useList } from '../context/listContext';
import { Link } from 'react-router-dom';

const Modals = () => {
  const [list] = useList();
  return (
    <div className='conmod'>
      <div className="leftmod">
        <div className="namemod">
            <span className="nameques">Name </span>:-
            <span className="nameans">  {list['contact']?.name}</span>
        </div>
        <div className="namemod">
            <span className="nameques">Age </span>:-
            <span className="nameans">  {list['contact']?.age}</span>
        </div>
        <div className="namemod">
            <span className="nameques">Bank Name </span>:-
            <span className="nameans">  {list['paymentOptions'][0]?.bank_name}</span>
        </div>
        <div className="namemod">
            <span className="nameques">Account No.  </span>:-
            <span className="nameans">  {list['paymentOptions'][0]?.account_no}</span>
        </div>
        <div className="namemod">
            <span className="nameques">IFSC </span>:-
            <span className="nameans">  {list['paymentOptions'][0]?.ifsc}</span>
        </div>
      </div>
      <div className="rightmod">
        <img src={list['paymentOptions'][0]?.upi_qr_url}  alt="" />
        <p className="qr">UPI ID</p>
        <Button variant="success"><Link to="/form" style={{textDecoration:'none', color:'inherit'}}>Proceed Further</Link></Button>{' '}
      </div>
    </div>
  )
}

export default Modals
