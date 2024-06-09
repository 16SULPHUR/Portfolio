import React from 'react'
import ProjectSMS from './ProjectSMS'
import ProjectPH from "./ProjectPH"
import ProjectAndroid from "./ProjectAndroid"
import ProjectVh from './ProjectVH'

const PersonalProjects = () => {
    return (
        <>
            <div className="personalProjects flex flex-col sm:w-9/12 mx-auto gap-10">

                <div className="flex flex-col gap-4">

                    <div className="heading font-PlayfairDisplay font-bold text-xl">
                        Personal Projects
                    </div>

                    <div className="h2 font-PlayfairDisplay font-bold sm:text-3xl text-2xl">
                        Each project is a unique piece of development 🧩
                    </div>
                </div>

                <ProjectVh />
                <ProjectSMS />
                <ProjectPH/>
                <ProjectAndroid/>
            </div>
        </>
    )
}

export default PersonalProjects