"use client";
import Image from 'next/image'

import linkedin from '../utils/picturesAndIcons/linkedinicon.png'
import call from '../utils/picturesAndIcons/calling.png'
import mail from '../utils/picturesAndIcons/gmail.png'

const Contact = () => {
    return (
        <div id='contact' className='contactdiv'>
            <div><hr></hr></div>
            <div>
                <div>
                    <ul className="contactul">
                        <li>Linkedin: Sucheta Mahata</li>
                        <li>nosuchetamahatano@gmail.com</li>
                        <li> Call : 7001431367</li>
                    </ul>
                </div>
                <div>
                    <ul className="contactul">
                        <li><a href="https://www.linkedin.com/in/sucheta-mahata/" className='linkheader'>
                            {<Image src={linkedin} className='second' alt='linkedin' />}</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nosuchetamahatano@gmail.com" className='linkheader'>
                            {<Image src={mail} className='second' alt='mail'/>}</a></li>
                        <li> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact