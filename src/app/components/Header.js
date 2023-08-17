"use client";
import Link from 'next/link';

const Header = () => {
    return (
        <div >
            <ul className="headerul">
                <Link href="#experiences" className='linkheader' smooth='true'> My Endeavours </Link>
                <Link href="#skills" className='linkheader' smooth='true'> Skills </Link>
                <li>Code</li>
                <Link href="#contact" className='linkheader' smooth='true'> Contact </Link>
            </ul>
        </div>
    )
}

export default Header