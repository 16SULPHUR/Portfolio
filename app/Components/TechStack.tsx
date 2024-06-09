'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, } from 'swiper/modules';

const TechStack = () => {
    return (
        <>
            <div className='lg:w-10/12 px-12 mx-auto'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        360: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/js.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-yellow-500'>Javascript</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/typescript.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-blue-500'>Typescript</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/node.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-lime-500'>Node js</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/php.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-violet-950'>PHP</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/react.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-sky-500'>React js</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/next.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-black'>Next js</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/mysql.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-blue-900'>MySQL</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/mongo.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-green-800'>Mongo DB</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/postgresql.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-sky-700'>PostgreSQL</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/graphql.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-pink-600'>GraphQL</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/firebase.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-amber-500'>Firebase</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='flex flex-col gap-2 justify-center'>
                            <img
                                src={"/tech-stack-logos/supabase.svg"}
                                alt='nodejs'
                                className='mx-auto h-16'
                            />
                            <span className='text-center font-semibold text-emerald-700'>Supabase</span>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    )
}

export default TechStack