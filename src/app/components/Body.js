"use client";
import Image from 'next/image'

import image2 from '../utils/picturesAndIcons/bottomrightimage.svg'
import sucheta from '../utils/picturesAndIcons/sucheta.jpg'

const Body = () => {

    return (
        <div className='bodydiv'>
            <div>
                <h1>
                    MERN stack Developer  and <br />Software Engineer
                </h1>
                <a href="https://drive.google.com/file/d/1OFdEbddax3lhFEFfnk7blvg2EGiR16br/view?usp=sharing"
                    download="SuchetaResume"
                    target="_blank"> 
                 <button className='resumebtn'>Download Resume</button>
                </a>
                <p className='introp'>Hi, I am Sucheta Mahata, a 22 years old Computer Science Engineer. I am a full stack web developer.
                    <br />I love developing and creating websites such as this one. I also like exploring the Cloud and
                    <br /> Apart from my tech life, I am an artist and spend my time drawing, sketching or designing.
                </p>
                <Image src={sucheta} className='suchetaImg' alt='Suchetas image' />
            </div>

            <Image src={image2} className='image2' alt='illustration'></Image>
        </div>
    )
}

export default Body