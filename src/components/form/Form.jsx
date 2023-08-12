import React, { useEffect, useState } from 'react'
import photo from "../../media/farmer.jpeg"
import Button from 'react-bootstrap/Button';
import { FcMoneyTransfer } from "react-icons/fc";
import { db, storage } from '../../firebase';
import "./form.scss"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import CircularWithValueLabel from '../CircularWithValueLabel';


const Form = () => {
    const navigate = useNavigate();
    let img;
    const handleFileUpload = async (event) => {
        console.log('started1')
        img = event.target.files[0];
    };

    // const [userreg, setuserreg] = useState({
    //     name: "",
    //     age: "",
    //     email: "",
    //     gender: "",
    //     mobile: "",
    //     city: "",
    //     country: "",
    //     district: "",
    //     pincode: "",
    //     state: "",
    //     village: "",
    //     amount: "",
    //     desc: ""
    // });
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [village, setVillage] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');

    const data = localStorage.getItem('obj')
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [check, setCheck] = useState(false);
    const ans = JSON.parse(data);
    // const [campaignsList, setcampaignsList] = useState([]);
    // const handelinput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     // console.log(name, value)
    //     setuserreg({ ...userreg, [name]: value })
    // }
    const [pinArr, setPinArr] = useState();
    const handlePincode = (e) => {
        setPincode(e.target.value);
    }
    useEffect(() => {
        if (pincode.length === 6) {
            console.log(pincode);
            setLoading(true);
            let temp;
            const url = `https://api.postalpincode.in/pincode/${pincode}`
            const pin = async () => {
                try {
                    let arr = await axios.get(url);
                    console.log(arr.data[0].PostOffice[0]);
                    temp = arr.data[0].PostOffice[0];
                    setCountry(temp?.Country);
                    setCity(temp?.Division);
                    setState(temp?.State);
                    setDistrict(temp?.District);
                    setVillage(temp?.Block);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }
            pin();
            console.log(country);
        }
        else {
            setLoading(false);
        }
    }, [pincode]);
    const handlesubmit = async (event) => {
        event.preventDefault();
        // image upload
        console.log('started')
        const file = img;
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        setCheck(true);
        console.log('1');
        setProgress(25);
        await fileRef.put(file);
        console.log('2');
        setProgress(50);
        let downloadURL = await fileRef.getDownloadURL();
        console.log('3');
        setProgress(75);
        console.log('File uploaded successfully!');
        console.log('Download URL:', downloadURL);

        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('phnone', mobile);
        localStorage.setItem('email', email);
        localStorage.setItem('img', downloadURL);
        localStorage.setItem('amount', amount);

        const temp = {
            amount: amount,
            message: desc,
            receipt_url: downloadURL,
            contact: {
                age: age,
                email: email,
                gender: gender,
                name: name,
                phone_no: mobile,
                address: {
                    city: city,
                    country: country,
                    district: district,
                    pincode: pincode,
                    state: state,
                    vill: village
                }
            }
        }
        ans['donors'].push(temp);
        const uid = ans.uid;
        const docRef = db.collection('campaigns').doc(uid);

        // update
        docRef.update(
            {
                campaignsList: [ans]
            }
        )
            .catch((err) => {
                alert(err);
                // props.showalert('Process is failed', 'danger');
                console.log(err);
            })
        // props.showalert('Thanks for donating', 'success');
        setProgress(100);
        setCheck(false);
        navigate('/reciept')
        console.log('done')
    }
    return (
        <div className='formcon'>
            <div className="leftform">
                <img src={photo} alt="" />
                <p className="desc"><span>We proudly a non profit organisation.</span> Agriculture is the practice of cultivating plants, animals, and other organisms for food, fiber, medicinal plants, and other products that are used to sustain and enhance human life. It's a vital industry that plays a critical role in feeding and supporting the global population.</p>
            </div>
            <div className="rightform">
                <h2>Thanks for donating<FcMoneyTransfer /></h2>

                <form onSubmit={handlesubmit}>
                    <div className="leftright">
                        <div className="leftsub">
                            <input type="text" placeholder='Name' id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder='Age' id="age" name="age" required value={age} onChange={(e) => setAge(e.target.value)} />
                            <input type="text" placeholder='Email' id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder='Mobile' id="mobile" name="mobile" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <input type="text" placeholder='Amount' id="amount" name="amount" required value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <select id="gender" name="gender" required placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="">--Select Gender--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                        </div>
                        <div className="rightsub">
                            <input type="text" placeholder='Pincode' id="pincode" name="pincode" required value={pincode} onChange={handlePincode} />
                            {!loading ? "" : <Spinner animation="border" />}
                            <input type="text" placeholder='City' id="city" name="city" required value={city} onChange={(e) => setCity(e.target.value)} />
                            <input type="text" placeholder='Village' id="village" name="village" required value={village} onChange={(e) => setVillage(e.target.value)} />
                            <input type="text" placeholder='District' id="district" name="district" required value={district} onChange={(e) => setDistrict(e.target.value)} />
                            <input type="text" placeholder='State' id="state" name="state" required value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <input type="text" placeholder='Country' id="country" name="country" required value={country} onChange={(e) => setCountry(e.target.value)} />
                        </div>
                    </div>
                    <textarea rows="4" cols="50" placeholder='Description' id="desc" name="desc" height={200} required value={desc} onChange={(e) => setDesc(e.target.value)}>
                    </textarea>
                    <br />
                    <input type="file" id="image" name="image" required accept="image/*" onChange={handleFileUpload} />
                    <br />
                    <Button variant="success" type='submit' style={{ marginRight: '20px' }}>Submit</Button>{' '}
                    {!check ? "" : <CircularWithValueLabel value={progress} />}
                </form>
            </div>
        </div>
    )
}

export default Form
