import React from 'react'
import './intro.css'
import {FaHospital} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'





const Intro = () =>{
    return(
        <div className='intro'>
            <div className='top'>
                <div className='intrologo'>
                    <FaHospital className='logo'/>
                    <h3>ISkincare</h3>
                </div>
                <div className='introinputs'>
                    <input name='name' placeholder="Enter your name"/>
                    <select id="language" name="language">
                        <option value="english">English</option>
                        <option value="napali">Nepali</option>
                    </select>
                </div>
            </div>
            <div className='bottom'>
                <p>Use proven method about the disease and use recommended remedies with us.</p>
                <div className='introarrow'>
                    <AiOutlineArrowRight/>
                </div>

            </div>

        </div>
    )
}

export default Intro;