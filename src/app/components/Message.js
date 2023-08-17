"use client";
import Image from 'next/image'

import { useState } from 'react'
import formImage from '../utils/picturesAndIcons/formIcon.svg'

const Message = () => {

    const [message, setMessage] = useState({ name: '', email: '', subject: '', messagetext: '' })

    const nameChangeHandle = (event) => {
        setMessage({ ...message, name: event.target.value })
    }
    const emailChangeHandle = (event) => {
        setMessage({ ...message, email: event.target.value })
    }
    const subjectChangeHandle = (event) => {
        setMessage({ ...message, subject: event.target.value })
    }
    const messageChangeHandle = (event) => {
        setMessage({ ...message, messagetext: event.target.value })
    }

    const buttonClickHandle = async () => {
        try {
            const response = await fetch("/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });

            const result = await response.json();
            alert("Message sent to Sucheta :) ");
            console.log(result)
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className='messagediv'>
            <div className='messagesubdiv'>
            <div >
                <h1>Get in touch</h1>
                <p> I would love to connect with you. Be it a job offer or <br />
                    just conversations on common interests, don't hesitate.<br />
                    You can fill out this form if you want me to reach out to you.<br /></p>
                <Image src={formImage} className='imgform' alt='illustration'/>
            </div>
            <div>
                <input placeholder='Name' className='inputBox1' onChange={nameChangeHandle} />
                <input placeholder='Email' className='inputBox1' onChange={emailChangeHandle} />
                <input placeholder='Subject' className='inputBox1' onChange={subjectChangeHandle} />
                <input placeholder='Your Message' className='inputBox1 inputBox2' onChange={messageChangeHandle} /><br/>
                <button className='buttonform' onClick={buttonClickHandle}> Send Message </button>
            </div>
            </div>
        </div>
    )
}

export default Message