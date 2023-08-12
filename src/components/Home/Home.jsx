import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import introR from '../../media/introR.jpeg'
import './home.scss'
import farmerpng from '../../media/farmerpng.png'
import donatepng from '../../media/donatepng.png'
import amountpng from '../../media/amountpng.png'
import donor from '../../media/donor.jpeg'
import farmer from '../../media/farmer.jpeg'
import paddy from '../../media/paddy.mp4'
import { FaGg, FaQuoteLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useList } from '../../context/listContext';
import Spinner from '../Spinner';

const Home = () => {
    const [counterOn, setConteron] = useState(false);
    const [alldocs, setdocs] = useState([]);
    const [farmerdoc, setfarmerdoc] = useState([]);
    const [donordoc, setdonordoc] = useState([]);
    const [amount, setamount] = useState(0);
    const [farmercount, setfarmercount] = useState(0);
    const [doncount, setdoncount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const temp = []
        setLoading(false);
        db?.collection("campaigns").get()
            .then((doc) => {
                doc.forEach((docu) => {
                    const data = docu.data().campaignsList[0];
                    temp.push(data)
                    // setdocs((prev)=>{
                    //   return [...prev, docu.data()]
                    // })
                })
                setdocs(temp)
                setLoading(true);

            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [])

    useEffect(() => {
        const temp = []
        db?.collection("farmer_exp").get()
            .then((doc) => {
                doc.forEach((docu) => {
                    const data = docu.data().experience;
                    temp.push(data)
                    // setdocs((prev)=>{
                    //   return [...prev, docu.data()]
                    // })
                })
                setfarmerdoc(temp[0])

            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [])

    useEffect(() => {
        const temp = []
        db?.collection("donor_exp").get()
            .then((doc) => {
                doc.forEach((docu) => {
                    const data = docu.data().experience;
                    temp.push(data)
                    // setdocs((prev)=>{
                    //   return [...prev, docu.data()]
                    // })
                })
                setdonordoc(temp[0])

            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [])
    // console.log(alldocs)
    const cal = ()=>{
        let tempamount = 0;
        let tempcount = 0;

        alldocs?.forEach((ele)=>{
            ele['donors'].forEach((element)=>{
                tempamount += Number(element.amount)
                tempcount++;
            });
        })
        setamount(tempamount);
        setfarmercount(alldocs.length);
        setdoncount(tempcount);
    }

    useEffect(()=>{
        cal();
    },[alldocs]);
    // console.log(amount);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    function createClickHandler(item) {
        return function () {
          onSet(item);
        }
      }
    const [list, setList] = useList();
      const onSet = (temp) => {
        localStorage.clear();
        const alltemp = temp;
        localStorage.setItem("obj", JSON.stringify(alltemp));
        setList(temp);
        console.log(list);
      }
    return (
    <>
    {
        !loading ? <Spinner/>:
        <div className='homecontainer'>
            <div className="intro">
                <div className="introL">
                    <p className="introLH">Farmers &</p>
                    <p className="introLH">Donors: Connect</p>
                    <p className="introLH">and Thrive.</p>
                    <div className="temp">
                        <p className="introLP">
                            Join the community of farmers and donors on AgroSeva, where
                        </p>
                        <p className="introLP">
                            you can easily connect, fund, and demand products, while also
                        </p>
                        <p className="introLP">
                            buying or renting equipment and stocking up on livestock
                        </p>
                        <p className="introLP">
                            essentials at the best prices.
                        </p>
                    </div>
                    <button className="introbtn">Learn More</button>
                </div>
                <div className="introR">
                    <img src={introR} alt="" />
                </div>
            </div>
            <ScrollTrigger onEnter={() => { setConteron(true) }}>
                <div className="homedata">
                    <div className="datacol">
                        <img src={farmerpng} alt="" />
                        <p className="datatit">Total Farmer</p>
                        <p className="dataamount">{counterOn && <CountUp start={0} end={farmercount} duration={3} />}</p>
                    </div>
                    <div className="datacol">
                        <img src={donatepng} alt="" />
                        <p className="datatit" style={{ color: 'green' }}>Donations</p>
                        <p className="dataamount"><span>Rs</span> {counterOn && <CountUp start={0} end={amount} duration={5} />}</p>
                    </div>
                    <div className="datacol">
                        <img src={amountpng} alt="" />
                        <p className="datatit">Fund Raised</p>
                        <p className="dataamount"><span></span> {counterOn && <CountUp start={0} end={doncount} duration={3} />}</p>
                    </div>
                </div>
            </ScrollTrigger>
            <div className="line1"></div>
            <p className="fabtit">Features & Benefits</p>
            <div className="line2"></div>
            <div className="fab">
                <div className="fabcon">
                    <div className="fabdiv">
                        <p>Features</p>
                        <ul className="flist">
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Connect with farmers who need funding or donations</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Ability to donate money or request specific products from farmers</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} />  Marketplace for buying, selling, renting, or borrowing farm equipment</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Purchase livestock medicines and fodders at competitive prices</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Direct communication with sellers via WhatsApp chat</li>
                        </ul>
                    </div>
                    <div className="fabdiv">
                        <p>Benefits</p>
                        <ul className="flist">
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Connect with farmers who need funding or donations</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Ability to donate money or request specific products from farmers</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Marketplace for buying, selling, renting, or borrowing farm equipment</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Purchase livestock medicines and fodders at competitive prices</li>
                            <li className="fp"><FaGg style={{ color: 'white' }} /> Direct communication with sellers via WhatsApp chat</li>
                        </ul>
                    </div>
                    <div className="fabdiv">
                        <img src={farmer} alt="" />
                    </div>
                </div>
            </div>
            <Carousel responsive={responsive1}>
                <div className="season">
                    <div className="seasonL">
                        <p className="seasonLH">The rabi crop</p>
                        <div className="temp">
                            <p className="seasonLP">
                                Rabi Crops are harvested in the spring season while it is sown
                            </p>
                            <p className="seasonLP">
                                in winter. The rabi crops are sown around mid-November,
                            </p>
                            <p className="seasonLP">
                                preferably after the monsoon rains are over
                                and harvesting
                            </p>
                            <p className="seasonLP">
                                begins in April / May. The crops are grown either with rainwater
                            </p>
                            <p className="seasonLP">
                                that hasepercolated into the ground or using irrigation. A good
                            </p>
                            <p className="seasonLP">
                                rain in winter spoils the rabi crops but is good for Kharif crops.
                            </p>
                        </div>
                        <button className="seasonbtn">Learn More</button>
                    </div>
                    <div className="seasonR">
                        <video src={paddy} autoPlay loop muted className='video' />
                    </div>
                </div>
                
                <div className="season">
                    <div className="seasonL">
                        <p className="seasonLH">The Kharif crop</p>
                        <div className="temp">
                            <p className="seasonLP">
                            Kharif crop refers to the type of crop that is sown and harvested
                            </p>
                            <p className="seasonLP">
                            during the rainy season in India, which typically lasts from June to October.
                            </p>
                            <p className="seasonLP">
                            These crops are well-suited to the monsoon climate and require a significant
                            </p>
                            <p className="seasonLP">
                            amount of water for their growth. Kharif crops are also known 
                            </p>
                            <p className="seasonLP">
                            as summer or monsoon crops.
                            </p>
                        </div>
                        <button className="seasonbtn">Learn More</button>
                    </div>
                    <div className="seasonR">
                        <video src={paddy} autoPlay loop muted className='video' />
                    </div>
                </div>
                
            </Carousel>
            <div className="line1"></div>
            <p className="fabtit">Campaigns</p>
            <div className="line2"></div>

            <div className="campaigns">

                <Carousel responsive={responsive}>
                    {
                        alldocs?.map((ele) => (
                            <div className="campaignsbox">
                                <figure>
                                    <img src={ele.campaign_image_url} alt="" />
                                </figure>
                                <h2>{ele.campaign_title}</h2>
                                <div className="camline"></div>
                                <p className="campaingscon">
                                    {ele.product_description.slice(0, 100)}...
                                </p>
                                <Link to="/blog">
                                    <button className="cambtn" onClick={createClickHandler(ele)}>Readmore</button>
                                </Link>
                            </div>
                        )
                        )
                    }
                    {/* <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                        <button className="cambtn">Readmore</button>
                </div>
                <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                        <button className="cambtn">Readmore</button>
                </div>
                <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                        <button className="cambtn">Readmore</button>
                </div>
                <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                        <button className="cambtn">Readmore</button>
                </div>
                <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                        <button className="cambtn">Readmore</button>
                </div> */}
                
                </Carousel>;
                {/* <div className="campaignsbox">
                    <figure>
                        <img src={grain} alt="" />
                    </figure>
                    
                        <h1>Sugar Cane</h1>
                        <div className="camline"></div>
                        <p className="campaingscon">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus repudiandae saepe possimus. Perferendis sint officia, laboriosam unde cum minima?
                        </p>
                    
                </div> */}

            </div>

            <div className="line1"></div>
            <p className="fabtit">what farmer says</p>
            <div className="line2"></div>

            <div className="dr">
                {/* <div className="drcon">
                    <FaQuoteLeft className='drquote' />
                    <figure>
                        <img src={donor} alt="" />
                    </figure>
                    <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                    <div className="drline"></div>
                    <p className="drname">John Doe</p>
                </div> */}
                <Carousel responsive={responsive}>
                    {farmerdoc?.map((ele) => (
                        <div className="drcon">
                            <FaQuoteLeft className='drquote' />
                            <figure>
                                <img src={ele.image_url} alt="" />
                            </figure>
                            <p className="drp">{ele.message.slice(0, 180)}...</p>
                            <div className="drline"></div>
                            <p className="drname">{ele.name}</p>
                        </div>
                    ))}
                    {/* <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div> */}
                </Carousel>
            </div>

            <div className="line1"></div>
            <p className="fabtit">what Donor says</p>
            <div className="line2"></div>

            <div className="dr">
                <Carousel responsive={responsive}>
                    {
                        donordoc?.map((ele) => (
                            <div className="drcon">
                                <FaQuoteLeft className='drquote' />
                                <figure>
                                    <img src={ele.image_url} alt="" />
                                </figure>
                                <p className="drp">{ele.exp.slice(0, 150)}..</p>
                                <div className="drline"></div>
                                <p className="drname">{ele.name}</p>
                            </div>
                        ))
                    }
                    {/* <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div>
                    <div className="drcon">
                        <FaQuoteLeft className='drquote' />
                        <figure>
                            <img src={donor} alt="" />
                        </figure>
                        <p className="drp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum quidem voluptates dolores sed ut quisquam delectus dicta beatae hic!</p>
                        <div className="drline"></div>
                        <p className="drname">John Doe</p>
                    </div> */}
                </Carousel>
            </div>

        </div>
    }
        </>
    )
}
// FaQuoteLeft

export default Home
