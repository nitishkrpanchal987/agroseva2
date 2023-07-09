import React from 'react'
import './reciept.scss'

const Reciept = () => {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const phone = localStorage.getItem('phnone');
    const email = localStorage.getItem('email');
    const imgurl = localStorage.getItem('img');
    const amount = localStorage.getItem('amount');
    const doc = JSON.parse(localStorage.getItem('obj'));
    // console.log(doc);
    const rname = doc['contact'].name;
    const title = doc.campaign_title;

    var today = new Date();
    const date = today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const id = today.getTime().toString();

  return (
    <div className='cont'>
        <div className="main">
            <h1>Donation Receipt</h1>
            
            <div className="about">
                <div className="l">
                    <h2>{title}</h2>
                    <div className="n">
                        <span className='h'>Name:</span>
                        <span className="n">{name}</span>
                    </div>
                    <div className="n">
                        <span className='h'>Age:</span>
                        <span className="n">{age}</span>
                    </div>
                    <div className="n">
                        <span className='h'>Phone No:</span>
                        <span className="n">{phone}</span>
                    </div>
                    <div className="n">
                        <span className='h' style={{paddingRight:'2px'}}>EmailId:</span>
                        <span className="n" style={{fontSize:'.8rem'}}>{email}</span>
                    </div>
                </div>
                <div className="r">
                    <h3 style={{textDecoration:'underline'}}>Donation</h3>
                    <img src={imgurl} alt="" />
                </div>
            </div>
            <div className="content">
                <p>This certificate is presented to {name} in recognition and sincere appreciation of your generous contribution to {rname}. Your donation of: <span style={{fontWeight:'bold'}}>Rs {amount}</span> on {date}-{month}-{year} has greatly supported our efforts to help farmers to contribute to the society</p>
                <div className="b">
                <span><span style={{fontWeight:'bold'}}>Receipt No.:</span>  {id}</span>
                <h1 className='ta'>Team AgroSeva</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Reciept
