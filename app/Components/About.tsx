import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <>
            <div className="about mx-auto flex sm:flex-row flex-col gap-20">
                <div className="web-dev relative">
                    <Image
                        src={"/about-img.png"}
                        alt='about-img'
                        width={400}
                        height={400}
                        className='about-img rounded-3xl bg-black'
                    />
                    <Image
                        className='wev-dev-img rounded-full absolute sm:w-40 w-28'
                        src={"/web-dev.gif"}
                        alt='web-dev'
                        width={150}
                        height={150}
                    />
                </div>

                <div className="about-text flex flex-col w-full gap-8 justify-center sm:text-start text-center">
                    <div className="about-heading font-bold text-xl sm:self-start self-center font-Mulish">
                        About Me
                    </div>

                    <div className="heading w-full font-bold text-3xl">
                        A dedicated Fullstack Developer
                        based in Surat, Gujarat 📍
                    </div>

                    <div className="about-desc text-lg text-gray-500 leading-relaxed font-Mulish sm:text-justify">
                        As a Full-Stack Developer, I specialize in React.js, Next.js, Node.js, and PHP, complemented by skills in MongoDB, MySQL, Tailwind CSS, and Bootstrap. My proficiency extends from crafting dynamic and responsive front-end interfaces to building scalable server-side applications. Committed to writing clean, optimized code, I collaborate seamlessly with cross-functional teams, ensuring the delivery of outstanding web applications that provide a compelling user experience.
                    </div>
                </div>
            </div>
        </>
    )
}

export default About