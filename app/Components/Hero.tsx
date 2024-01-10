import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className='hero w-fit mx-auto mt-6'>
                <div className="hero-main flex sm:flex-row flex-col-reverse items-center">
                    <div className="hero-text flex flex-col py-9 w-fit">
                        <div className="header relative">
                            <div className='header-text sm:text-5xl text-4xl font-bold break-words sm:w-7/12 leading-tight'>
                                Fullstack Web Developer
                            </div>
                            <Image
                                src={"/waving-hand.png"}
                                alt='waving hand'
                                width={60}
                                height={60}
                            />
                            <p className='break-words sm:w-96 sm:my-12 text-lg text-gray-500'>
                                Hi, I'm Ankit Patil. A passionate Fullstack Developer based in Surat, Gujarat. 📍
                            </p>
                        </div>

                    </div>

                    <div className="hero-img">
                        <Image
                            src={"/me.jpg"}
                            alt='hero-img'
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero