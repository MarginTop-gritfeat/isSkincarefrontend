import React from 'react';
import {FaUser} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import {FaHospital} from 'react-icons/fa'
import './landing.css'
import Nav from '../nav/nav';
import Footer from '../footer/footer';


const Landing = () =>{
    return(
        <div className='landing'>
            <div className='top'>
                <div className='a'>
                    <FaUser className="alogo"/>
                    <IoMdSettings className="alogo"/>
                </div>
                <div className='b'>
                    <FaHospital/>
                </div>
                <div className='c'>
                    <h2>Welcome Back</h2>
                    <h3>Roshan</h3>                  
                </div>
            </div>
            <div className="bottom">

            </div>
            <div className='bottom'>
                <div className='services'>
                    <h2>What we Offer</h2>
                </div>
                <div className='servicescontainer'>
                    <a href="/skindisease">
                        <div className='servicescard'>
                            <img src="../images/doctor.png"/>
                            <h4>Skin Disease Detection</h4>
                        </div>
                    </a>
                    <a href="skinmonitoring">
                        <div className='servicescard'>
                            <img src="../images/doctor.png"/>
                            <h4>Skin Monitoring</h4>
                        </div>
                    </a>
                    <a href="/skinopedia">
                        <div className='servicescard'>
                            <img src="../images/doctor.png"/>
                            <h4>Skinopedia</h4>
                        </div>
                    </a>
                    <a href="/reportDoc">
                        <div className='servicescard'>
                            <img src="../images/doctor.png"/>
                            <h4>Set Appointment</h4>
                        </div>
                    </a>
                    <a href="/forum">
                        <div className='servicescard'>
                            <img src="../images/doctor.png"/>
                            <h4>SkinoForum</h4>
                        </div>
                    </a>
                </div>
            </div>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Landing