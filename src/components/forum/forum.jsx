import React, {useState} from 'react';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import './forum.css'
import {ImCross} from 'react-icons/im'

const Forum = () =>{

    const [modal, setmodal] = useState(false)
    const [data, setdata] = useState({
        message:''
    })




    const initialmessages = [{
        name:'Anonymous202',
        datetime:'7th Jan, 2022 - 10:30pm',
        subject:'Web Development',
        message:'To prepare for our launch, we’re looking for an experienced marketing co-founder (CMO) to define, plan and execute our marketing strategy for our India wide launch later this year. Over the next 12 months, our aim is to successfully launch across the India, leading to a Seed and Series A and funding for international expansion',
    },
    {
        name:'Anonymous205',
        datetime:'7th Jan, 2022 - 10:30pm',
        subject:'Web Development',
        message:'To prepare for our launch, we’re looking for an experienced marketing co-founder (CMO) to define, plan and execute our marketing strategy for our India wide launch later this year. Over the next 12 months, our aim is to successfully launch across the India, leading to a Seed and Series A and funding for international expansion',
    },
    {
        name:'Anonymous02',
        datetime:'7th Jan, 2022 - 10:30pm',
        subject:'Web Development',
        message:'To prepare for our launch, we’re looking for an experienced marketing co-founder (CMO) to define, plan and execute our marketing strategy for our India wide launch later this year. Over the next 12 months, our aim is to successfully launch across the India, leading to a Seed and Series A and funding for international expansion',
    },
]
    const [messages, setmessages] = useState(initialmessages)
    const handleinputchange = (e) =>{
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }

    const handlesubmit = e => {
        e.preventDefault();
        console.log(data)
        if (data.message === null) {
            alert('Message field empty')
        }
        else {
            fetch("#", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                }
            })

                .then(response => response.json())
            setmodal(false)
            setdata('')


        }

    }




    return(
        <div className='messages'>
            <div className='forumlanding'>
                <h1>Place your Queries</h1>
                <p>
                    Fill in the form to share your experiences and learn from the people who have suffered through it.
                </p>
                <div className='servicesearch'>
                    <div className='button' onClick={()=>setmodal(true)}>Add a Query</div>
                </div>
            </div>
        <div className='imports'>
        </div>
        <div className='extra'>
        <div className='content'>
            {
            messages.map((data, map)=>(
                <div className='messagecard'>
                    <div className='a1'>
                        <div className='intro'>
                            <img src="../../images/doctor.png"/>
                            <div className='name'>
                                <h1>{data.name}</h1>
                                <h2>{data.datetime}</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='a2'><span>Subject:&nbsp;</span><h3>{data.subject}</h3></div>
                    <div className='a3'><h4>{data.message}</h4></div>
                </div>

            ))
        }

        </div>
        </div>
        <Nav/>
        <Footer/>


        {
                modal===true &&
                    <div className='modal' data-aos="fade-up">
                        <div className='reportmodal'>
                            <div className='cross'><ImCross onClick={()=>setmodal(false)}/></div>
                        <div className='reportmodalcontent'>
                        <div className='title'>
                            <img src="../images/doctor.png" style={{'height':'8vh'}}></img><h1>Enter your query</h1>
                        </div>
                        <div className='inputs'>
                            <div className='input_field'>
                                <h4>Your Query ?</h4>
                                <input value={data.message} name="message" onChange={handleinputchange}></input>
                            </div>
                            
                            
                            <button onClick={handlesubmit}>Submit</button>
                        </div>
                    </div>
            </div>  

                </div>
            }

    </div>
    )
}

export default Forum;