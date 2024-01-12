import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectSMS = () => {
    return (
        <>
            <div className="bigCard flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-5 bg-white rounded-lg px-8 py-6">
                <div className="project-img rounded-2xl overflow-hidden shadow-xl">
                    <Link href={"/"}>
                        <img src='/projectSMS.svg' />
                    </Link>
                </div>
                <div className="project-info py-3 px-5 flex flex-col gap-4">
                    <div className="project-text flex flex-col gap-5">
                        <div className="project-title text-2xl font-bold text-center">
                            Society Management System
                        </div>
                        <div className="project-title text-lg font-Mulish text-gray-500 text-center">
                            Efficient software for society admins: manage maintenance, digital notices, events, complaints, and rules effortlessly. Simplify community management.
                        </div>
                    </div>
                    <div className="project-tech-stack flex justify-center gap-5">
                        <Image
                            src={"icon-react-only.svg"}
                            alt='react'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"icon-node-only.svg"}
                            alt='node'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"icon-tailwind-only.svg"}
                            alt='tailwind'
                            width={40}
                            height={40}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSMS