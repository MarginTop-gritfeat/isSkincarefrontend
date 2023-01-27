import React from 'react';
import {FaUser} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import {FaHospital} from 'react-icons/fa'








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
        </div>
    )
}

export default Landing