import './skinmonitoring.css'
import { FaSearch } from 'react-icons/fa';
import {MdDoubleArrow} from 'react-icons/md'
import {GiPlantRoots} from 'react-icons/gi'
import React, {useState} from 'react';
import {AiFillCamera} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {CiApple} from 'react-icons/ci'
import {GiCorn} from 'react-icons/gi'
import {FaArrowLeft,FaLeaf} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import Webcam from 'react-webcam'
import ClockLoader from "react-spinners/ClockLoader";
import Nav from '../nav/nav';
import Footer from '../footer/footer';






const WebcamComponent = () => <Webcam />
const videoConstraints = {
    width: 400,
    height: 400,
    // facingMode: { exact: "environment" }
    facingMode: "user"

}


const Skinmonitoring = () =>{
    const [loading, setLoading] = useState(false);


    const [modal, setmodal] = useState({
        status:false,
        name:''
    })
    const [inputdata, setinputdata] = useState({
        age:'',
        sex:'',
        location:''
    })
    const [reportmodal, setreportmodal] = useState(false)
    const [report, setreport] = useState({
        crop:'',
        disease_name:'',
        information:'',
        symptoms:'',
        treatment:''
    })

    const [picture, setPicture] = useState('')
    const webcamRef = React.useRef(null)
    const capture = React.useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
    })

    const handleinputchange = (e) =>{
        var { name, value } = e.target
        setinputdata({
            ...inputdata,
            [name]: value
        })
    }


    const handlesubmit = async e => {
        e.preventDefault();
        console.log(picture)
        console.log(inputdata)




        if (picture === null) {
            alert('Message field empty')
        }
        else {
            let formData = new FormData()
       
            

            
           

            formData.append("image", picture.split(',')[1]);
            console.log(formData)

            setLoading(true)
            const url = "https://100.64.131.174:8000/monitor"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                            // "Content-type": "multipart/form-data",
                     },
                body: formData,

            }
            );
            const x = await response.json()
            setLoading(false)
            // console.log(x.description.name)
            // console.log(x.description.Information)
            // console.log(x.description.Treatment)
            
         
        }}


    // const plants = [
    //     {
    //         name:'Apple',
    //         image:'',
    //         icon:<CiApple/>
    //     },
    //     {
    //         name:'Maize',
    //         image:'',
    //         icon:<GiCorn/>
    //     },
      
    //     {
    //         name:'Potato',
    //         image:'',
    //         icon:<FaLeaf/>
    //     }
    // ]
    console.log(modal)
    const showreport =()=>{
        setmodal({status:false})
        setreportmodal(!reportmodal)
    }
    const closeandreload=()=>{
        window.location.reload(true)
    }

    return(
        <div className='disease'>
            <div className='diseaselandingtop'>
                <h1>Track your health</h1>
                <p>
                    Generate today's report for your healing process.
                </p>
                <div className='servicesearch'>
                    <input placeholder='Take a picture' value=""></input>
                    <div className='searchlogo' onClick={()=>setmodal({status:true})}>
                        <AiFillCamera/>
                    </div>
                </div>
            </div>
            <div className='diseasecontent'>
                <h1>Track your healing process</h1>
                <div className='diseasecontainer'>
                    
                            <div className='diseasecard'>
                                <div className='image' style={{fontSize:'30px'}}>
                                    <FaUserCircle/>
                                </div>
                                <div className='cropname'>
                                    <h1>Aug 01, 2022</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>setmodal({status:true})}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                            <div className='diseasecard'>
                                <div className='image' style={{fontSize:'30px'}}>
                                    <FaUserCircle/>
                                </div>
                                <div className='cropname'>
                                    <h1>Aug 04, 2022</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>setmodal({status:true})}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                            <div className='diseasecard'>
                                <div className='image' style={{fontSize:'30px'}}>
                                    <FaUserCircle/>
                                </div>
                                <div className='cropname'>
                                    <h1>Aug 06, 2022</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>setmodal({status:true})}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                    </div>
                    </div>
            {/* <div className='diseasecontent'>
                <h1>Select the Crop</h1>
                <div className='diseasecontainer'>
                    {
                        plants.map((plant, key)=>(
                            <div className='diseasecard' key={key}>
                                <div className='image' style={{fontSize:'30px'}}>
                                    {plant.icon}
                                </div>
                                <div className='cropname'>
                                    <h1>{plant.name}</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>setmodal({status:true, name:plant.name})}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                        ))
                    }
                </div>
            </div> */}
            {modal.status===true &&
            <div className='modal'>
                <div className='modalcontainer'>
                    <h2><Link style={{color:'white',textDecoration:'none', display:'flex',alignItems:'center'}} onClick={()=>window.location.reload(true)} to="/services/disease"><FaArrowLeft/></Link>&nbsp;&nbsp;Capture an image</h2>
                    <div>
                        {picture === '' ? (
                            <Webcam
                                audio={false}
                                height={400}
                                ref={webcamRef}
                                width={400}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}

                            />
                        ) : (
                            <img src={picture} alt=" "/>
                        )}
                    </div>
                    <div className='capturebuttons'>

                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                capture()
                            }}
                            className="btn btn-danger"
                        >
                            Capture
                        </button>
                        
                    </div>
                    
                    <div className='submit' onClick={handlesubmit}>
                            <button disabled={picture===''?true:false} onClick={()=>showreport()} className="samir">Submit</button>
                        </div>
                    
                </div>
                <Footer/>
                        <Footer/>
            </div>
}
{
    (reportmodal===true && loading===false) ?
    (
    <div className='reportmodal' data-aos="fade-up">
        <div className='cross'><ImCross onClick={()=>closeandreload()}/></div>
        <div className='reportmodalcontent'>
        <div className='title'>
            <img src="../images/doctor.png"/><h1>Disease report on your skin</h1>
        </div>
        <div className='reportcontent'>
            <div className='name'>Disease: <span>{report.disease_name}</span></div>
            <p className='information'>{report.information}</p>
            <div className='symptoms'>
                {/* <h2>Symptoms</h2>
                <ul>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                </ul> */}
            </div>
            <div className='symptoms'>
                <h2>Treatment</h2>
                <ul>
                    
                        {report.treatment}
                    
                    <br/>
                </ul>
                

            </div>
        </div>
        </div>
    </div>
    ):(
        <div className="loader"><ClockLoader color={'black'} loading={loading} size={40} /></div>
    )

}

        <Nav/>
        <Footer/>
        </div>
        
    )
}


export default Skinmonitoring;