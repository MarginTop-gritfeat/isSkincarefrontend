import React from "react";
import { FaSearch } from "react-icons/fa";
import {BiPhoneCall} from 'react-icons/bi';
import { IoMdPerson } from "react-icons/io";
import {BsArrowRightCircle} from 'react-icons/bs'
import './reportdoc.css'
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const ReportDoc=() =>{
   
        const doctors = [
            {
                name:'Bibek Chalise',
                image:<IoMdPerson/>,
                number:'+9845926945',
                location:'Lamachar, Pokhara-16'
            },
            {
                name:'Rajan Devkota',
                image:<IoMdPerson/>,
                number:'+9845926945',
                location:"Sundhara, Kathmandu"
            },
            {
                name:'Samir Lamsal',
                image:<IoMdPerson/>,
                number:'+9845926945',
                location:'Pulchok, Kathmandu'

            }
            ,
            {
                name:'Roshan KC',
                image:<IoMdPerson/>,
                number:'+9845926945',
                location:'Gaindakot-2, Nawalpur'
            }
        
        ]
    
    
        return <div className="doctorlanding">
                    <div className='doctorlandingtopp'>
                    <h1>Call a Doctor</h1>
                    <p>Call anyone of the registered doctors to consult with them regarding your crops. </p>
    
                    <div className='servicessearchh'>
                        <input placeholder='Enter Docotor name'></input>
                        <div className='searchlogo'>
                            <FaSearch/>
                        </div>
                    </div>
                </div>
                <div className="doctorcontent">
                    <h1>Select a doctor</h1>
                    <div className="diseasecontainer">
                        {
                            doctors.map((doctors, key)=>(
                               <div className="doctorcard" key={doctors}>
                                 <div className="image">
                                    {doctors.image}
                                </div>
                                <div className="doctorname">
                                    <h1>
                                        {doctors.name}
                                    </h1>
                                    <p>{doctors.location}</p>
                                </div>
                             
                                <a href="tel:{doctors.number}">
                                <div className="harvestbutton">
                                <BsArrowRightCircle/>
                                </div>
                                </a>
                               </div>
                            ))
                        }
                    </div>
                </div>
                <Nav/>
                <Footer/>
        </div>
    
}

export default ReportDoc