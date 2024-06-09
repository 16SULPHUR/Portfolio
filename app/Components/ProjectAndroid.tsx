import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectSMS = () => {
    return (
        <>
            <div className="bigCard flex sm:flex-row flex-col justify-center items-center sm:gap-40 gap-5 bg-white rounded-lg px-8 py-6">
                <div className="project-img- rounded-2xl overflow-hidden shadow-xl">
                    <Link target='_blank' href={"/video-project-android.mp4"}>
                        <video autoPlay muted loop className="h-96">
                            <source src="/video-project-android.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Link>
                </div>
                <div className="project-info py-3 px-5 flex flex-col sm:gap-8 gap-10">
                    <div className="project-text flex flex-col gap-5">
                        <div className="project-title text-2xl font-bold text-center">
                            Purely: Environmentally Friendly Shopping Assistant
                        </div>
                        <div className="project-title text-lg font-Mulish text-gray-500 text-center">
                        Consciously shop with this assistant. Scan product barcodes to access sustainability information. Enhance details with your own input for a more informed choice.

                        </div>
                    </div>
                    <div className="project-tech-stack flex justify-center gap-5">
                        <Image
                            src={"icon-android.svg"}
                            alt='react'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"icon-java.svg"}
                            alt='node'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"icon-node-only.svg"}
                            alt='tailwind'
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="project-links flex justify-around sm:px-12 font-semibold">
                        <Link target="_blank" href={"https://github.com/16SULPHUR/Purely-BarcodeScanner"} className='github-link flex gap-2 items-center text-gray-500 hover:text-black'>
                            Code
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                        </Link>
                        {/* <Link target="_blank" href={"/video-project-android.mp4"} className='github-link flex gap-2 items-center text-gray-500 hover:text-purple-700'>
                            Demo
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                        </Link> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectSMS