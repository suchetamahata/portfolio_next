"use client";
import Image from 'next/image'

import image2 from '../utils/picturesAndIcons/bottomrightimage.svg'
import sucheta from '../utils/picturesAndIcons/sucheta.jpg'
import resume from '../utils/picturesAndIcons/SuchetaMahataResume.jpg'

const Body = () => {

    const onButtonClick = () => {

        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SuchetaResume';
                alink.click();
            })
        })
    }
    return (
        <div className='bodydiv'>
            <div>
                <h1>
                    MERN stack Developer
                    <br />
                    Based in India
                    <br />
                    <button className='resumebtn' onClick={onButtonClick}>Download Resume</button>
                </h1>
                <p className='introp'>Hi, I am Sucheta Mahata, a 22 years old Computer Science Engineer. I am a full stack web developer.
                    <br />I love developing and creating websites such as this one. I also like exploring the Cloud and 
                    <br/> Apart from my tech life, I am an artist and spend my time drawing/sketching/designing.
                </p>
                <Image src={sucheta} className='suchetaImg' alt='Suchetas image'/>
            </div>

            <Image src={image2} className='image2' alt='illustration'></Image>
        </div>
    )
}

export default Body