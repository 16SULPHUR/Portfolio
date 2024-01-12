import React from 'react'
import Image from 'next/image'
// import iconNode from "../../public/icon-node-express.svg"

const TechStack = () => {
    return (
        <>
            <div className='w-9/12 px-12 mx-auto bg-black/[.0] flex sm:flex-row flex-col gap-10 items-center'>
            {/* <div className='w-7/12 px-12 mx-auto bg-black/[.0] grid sm:grid-cols-5 grid-cols-1'> */}
                <span className='font-normal text-2xl sm:no-underline underline-offset-8 underline self-center'>Tech Stack</span>
                {/* <span className='font-normal text-2xl sm:no-underline underline-offset-8 underline sm:self-start self-center col-span-1 justify-self-center'>Tech Stack</span> */}
                <span className='text-4xl font-light sm:block hidden self-center'>|</span>
                {/* <span className='text-4xl font-light sm:block hidden self-start col-span-1 justify-self-center'>|</span> */}
                <div className="skills-icons grid sm:grid-cols-6 grid-cols-2 sm:gap-5 gap-8 sm:w-9/12 w-80 sm:px-1 px-7">
                {/* <div className="skills-icons grid sm:grid-cols-4 grid-cols-2 sm:gap-3 gap-8 sm:w-full w-80 SM:px-0 px-7 justify-center col-span-3"> */}

                    <Image
                        src={"/icon-html.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />

                    <Image
                        src={"/icon-javascript.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />

                    <Image
                        src={"/icon-react.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />

                    <Image
                        src={"/icon-tailwind.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />






                    <Image
                        src={"/icon-node-express.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />

                    <Image
                        src={"/icon-mongo-sql.svg"}
                        alt='node-express'
                        width={105}
                        height={105} />
                </div>
            </div>
        </>
    )
}

export default TechStack