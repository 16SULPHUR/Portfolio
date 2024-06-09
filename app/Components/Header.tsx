'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
const Header = () => {
    const [mobileLinksClassNames, setMobileLinksClassNames] = useState<boolean>(true);
    const mobileLinksClassName = `mobile-links sm:hidden block mt-4 ${mobileLinksClassNames ? 'hidden' : 'block'}`;

    return (
        <>
            <nav className='navbar bg-white py-6 px-12 shadow-sm w-full'>
                <div className="flex justify-between">
                    <Link href={"/"}>
                        <div className="logo font-semibold text-2xl">
                            Ankit Patil
                            </div>
                    </Link>

                    <div className="links sm:block hidden">
                        <ul className='flex gap-7 font-semibold text-lg'>
                            <li className='header-links'><Link href={"#home"}>Home</Link></li>
                            <li className='header-links'><Link href={"#about"}>About</Link></li>
                            <li className='header-links'><Link href={"#projects"}>Projects</Link></li>
                            <li className='header-links'><Link href={"#contact"}>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="hamburger sm:hidden block" onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
                    </div>
                </div>

                <div className={mobileLinksClassName}>
                    <ul className='flex flex-col gap-7 font-semibold text-lg items-center'>
                        <li onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}><Link href={"#home"}>Home</Link></li>
                        <li onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}><Link href={"#about"}>About</Link></li>
                        <li onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}><Link href={"#projects"}>Projects</Link></li>
                        <li onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}><Link href={"#contact"}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header