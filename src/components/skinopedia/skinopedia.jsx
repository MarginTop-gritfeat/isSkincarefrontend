import React, {useState} from 'react';
import { FaSearch,FaDisease } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { GiPlantRoots } from 'react-icons/gi';
import { MdDoubleArrow } from 'react-icons/md';
import Diseasedata from './diseasedata'

import './skinopedia.css'
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const Skinopedia = () =>{

    



    const [modaldata, setmodaldata]= useState({
        status:false, 
        short_name:'',
        name:'',
        description:'',
        symptoms:[],
        causes:[],
        prevention:''

    })
    // const Agrodata = [
    //     {
    //         name:'Apple',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:'',
    //     },
    //     {
    //         name:'Maize',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     },
    //     {
    //         name:'Rice',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     },
    //     {
    //         name:'Potato',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     }
    // ]
    return(
        <div className='agropedia'>
            <div className='agropediatop'>
                <h1>Skinopedia</h1>
                <p> Place where you can find information about different skin condition, their causes,symptoms,prevention and solution.</p>
                <div className='servicesearch'>
                    <input placeholder='Search for Disease'></input>
                    <div className='searchlogo'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='agrocontent'>
                <h2>Know Different Condtion of Skin</h2>
            <div className='diseasecontainer'>
            {
                Diseasedata.map((disease, key)=>(
                   
                            <div className='diseasecard' key={key}>
                                <div className='image'>
                                    <FaDisease/>
                                </div>
                                <div className='cropname'>
                                    <h1>{disease.name}</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>{setmodaldata({status:true, short_name:disease.short_name, name:disease.name, description:disease.description,symptoms:disease.symptoms, causes:disease.causes, prevention:disease.prevention })}}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                ))
            }
            </div>
            </div>
            {
                modaldata.status===true &&
                    <div className='indireportmodal'>
                    <div className='cross'><ImCross onClick={()=>setmodaldata(false)}/></div>
                    <div className='reportmodalcontent'>
                    <div className='title'>
                        <img src="../images/doctor.png"></img><h1>Report on {modaldata.short_name}</h1>
                    </div>
                    <div className='reportcontent'>
                        <div className='name'><span>{modaldata.name}</span></div>
                        <p className='information'>{modaldata.description}</p>
                        <div className='symptoms'>
                            <h2>Symptoms</h2>
                            {modaldata.symptoms.map((data, key)=>(<p>&#x2022;{data}</p>))}
                        </div>
                        <div className='causes'>
                            <h2>Causes</h2>
                            {modaldata.causes.map((data1, key)=>(<p>&#x2022;{data1}</p>))}
                        </div>
                        <div className='causes'>
                            <h2>Prevention</h2>
                            {modaldata.prevention}
                        </div>
                    </div>
                    </div>
                </div>
                                

                        }
                        <Nav/>
                        <Footer/>
                    </div>
                )
}

export default Skinopedia;