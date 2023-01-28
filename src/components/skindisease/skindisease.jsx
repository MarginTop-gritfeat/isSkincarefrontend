import './skindisease.css'
import { FaSearch } from 'react-icons/fa';
import {MdDoubleArrow} from 'react-icons/md'
import {GiPlantRoots} from 'react-icons/gi'
import React, {useState} from 'react';
import {AiFillCamera} from 'react-icons/ai'
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
    facingMode: { exact: "environment" }
    // facingMode: "user"

}
let file_link = ''


const Disease = () =>{
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
        name:'',
        description:'',
        prevention:'',
        report:'',
        causes:[],
        short_name:'',
        symptoms:[],
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

    // const Downloadlink = () =>{
    //     let file_link = 'https://192.168.2.201:8000/' + report.report
    //     let blob = file_link.blob()
    //     console.log(file_link)
    //     console.log(blob)
    //     const fileURL = window.URL.createObjectURL(blob)
    //     let alink = document.createElement('a')
    //     alink.href = fileURL
    //     alink.download = 'file_link'
    //     alink.click();
    // }


    const handlesubmit = async e => {
        e.preventDefault();
        console.log(picture)
        console.log(inputdata)




        if (picture === null) {
            alert('Message field empty')
        }
        else {
            let formData = new FormData()
            formData.append('age', inputdata.age);
            formData.append('sex', inputdata.sex);
            formData.append('location', inputdata.location);
            

            
           

            formData.append("image", picture.split(',')[1]);
            console.log(formData)

            setLoading(true)
            const url = "https://100.64.131.175:8000/predictdisease"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                            // "Content-type": "multipart/form-data",
                     },
                body: formData,

            }
            );
            const x = await response.json()
            setreport({
                name:x.name,
                description:x.description,
                prevention:x.prevention,
                report:x.report,
                causes:x.causes,
                short_name:x.short_name,
                symptoms:x.symptoms,
            })
            
            setLoading(false)
            // console.log(x.description.name)
            // console.log(x.description.Information)
            // console.log(x.description.Treatment)
            
         
        }}
        file_link = 'https://100.64.131.175:8000/' + report.report


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
    console.log(file_link)

    return(
        <div className='disease'>
            <div className='diseaselandingtop'>
                <h1>Disease</h1>
                <p>
                    Take a snap and submit your details
                </p>
                <div className='servicesearch'>
                    <input placeholder='Take a picture'></input>
                    <div className='searchlogo' onClick={()=>setmodal({status:true})}>
                        <AiFillCamera/>
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
                    <div className='inputform'>
                        <div className='input_field'>
                            <h3>Age</h3><input name="age" value={inputdata.age} onChange={handleinputchange} className="ageinput" style={{color:'white', backgroundColor:'#819347'}}></input>
                            
                        </div>
                        <div className='input_field'>
                            <h3>Sex</h3>
                            <select id="sex" name="sex" value={inputdata.sex} onChange={handleinputchange}>
                                <option value="0">Others</option>
                                <option value="2">Male</option>   
                                <option value="1">Female</option>  
                            </select>
                        </div>
                        <div className='input_field'>
                        <h3>Body Part</h3>
                            <select id="location" name="location" value={inputdata.location} onChange={handleinputchange}>
                                <option value="1">Abdomen</option>
                                <option value="2">Back</option>
                                <option value="3">Chest</option>
                                <option value="4">Face</option>
                                <option value="5">Foot</option>
                                <option value="6">Hand</option>
                                <option value="7">Lower Extremity</option>
                                <option value="8">Neck</option>
                                <option value="9">Scalp</option>
                                <option value="10">Trunk</option>
                                <option value="11">Upper Extremity</option>
                                <option value="0">Other</option>
                                
                            </select>
                            </div>
                        
                        
                        
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
            <div className='name'>Disease: <span>{report.short_name}</span></div>
            <div className='name'>Full Name: <span>{report.name}</span></div>
            <p className='information'>{report.description}</p>
            <div className='symptoms'>
                <h2>Symptoms</h2>
                {report.symptoms.map((symptom, key)=>(<li>{symptom}</li>))}
            </div>
            <div className='symptoms'>
                <h2>Causes</h2>
                {report.causes.map((causes, key)=>(<li>{causes}</li>))}
            </div>
            <div className='symptoms'>
                <h2>Prevention</h2>
                <ul>
                    
                        {report.prevention}
                    
                    <br/>
                </ul>
                

            </div>
            <div className='symptoms'>
                {/* <h2 className='generatereport' download>Generate Report</h2> */}
                {/* <a href="https://192.168.2.201:8000/pdf/859392033839943093.pdf" style={{textDecoration:'none'}} target="_blank" className='generatereport'>Generate Report</a> */}
                <a href={file_link} style={{textDecoration:'none'}} target="_blank" className='generatereport'>Generate Report</a>

                
            </div>
        </div>
        </div>
        <Footer/>
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

export default Disease;