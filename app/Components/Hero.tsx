import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className='hero w-fit mx-auto mt-6 mb-20'>
                <div className="hero-main flex sm:flex-row flex-col-reverse items-center">
                    <div className="hero-text flex flex-col pt-9 w-fit">
                        <div className="header relative">
                            <div className='header-text font-bold break-words sm:w-7/12'>
                                Full-Stack Web Developer 👋
                            </div>
                            {/* <Image
                                className=''
                                src={"/waving-hand.png"}
                                alt='waving hand'
                                width={60}
                                height={60}
                            /> */}
                            <p className='break-words sm:text-left text-center mt-12 text-lg text-gray-500 '>
                                Hi, I'm Ankit Patil. A passionate Full-Stack Developer based in Surat, Gujarat. 📍
                            </p>
                            <div className='flex gap-7 sm:justify-start justify-center w-full mt-12 items-center'>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ankit-patil-67ab29240"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>

                                <a className='' aria-label="github" rel="noreferrer" target="_blank" href="https://www.github.com/16SULPHUR"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>

                                <a className="resume-link" aria-label="resume" rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1dfYQ6ofAofAWVearyCpiZZYFX_fdWWo79mHebglS5cU/edit?usp=sharing">
                                    <svg width="30" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="resume-icon">
                                        <path className="resume-icon-path" d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#898989" strokeWidth="2" />
                                        <path className="resume-icon-path" d="M8 12H16" stroke="#898989" strokeWidth="2" strokeLinecap="round" />
                                        <path className="resume-icon-path" d="M8 8H16" stroke="#898989" strokeWidth="2" strokeLinecap="round" />
                                        <path className="resume-icon-path" d="M8 16H13" stroke="#898989" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </a>

                            </div>
                        </div>

                    </div>

                    <div className="hero-img">
                        <Image
                            src={"/me.jpg"}
                            alt='hero-img'
                            width={350}
                            height={350}
                            className='sm:w-72 w-56'
                        />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Hero