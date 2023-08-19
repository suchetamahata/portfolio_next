"use client";
import skills from '../utils/picturesAndIcons/skills.png'
import skillimg from '../utils/picturesAndIcons/skilldicon.svg'
import Image from 'next/image'

const Skills = () => {
    return (
        <div className='divskills' id='skills'>
              <div>
                <Image src={skills} className='skillsimg' alt='skills' />
            </div>
            <div>
                <Image src={skillimg} alt='illustration' className='smallimg' />
            </div>
        </div>
    )
}

export default Skills