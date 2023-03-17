
import React from 'react'

const Skills = ({ data, experienceData }: { data: any, experienceData: any }) => {
    const { skill } = data
    const { experience } = experienceData
    return (
        <div className='flex flex-row justify-around m-56'>
            <div className='flex flex-col w-1/2'>
                <div>
                    <h1 className='font-extrabold text-6xl font-display text-black'>Skills</h1>
                </div>
                <ul className="flex flex-col mt-10">
                    {skill.map(({ skill, level, width}: { skill: string, level: string, width:string }) => (
                        <li key={skill} className="p-4">
                            <div>
                                <h1 className='text-xl font-display font-bold pb-2'>{skill}</h1>
                            </div>
                            <div className="w-96 bg-white rounded-full">
                                <div className={`bg-blue p-1 text-center text-sm font-medium leading-none rounded-full text-white ${width} `}>
                                   {level}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col w-1/2'>
                <div>
                    <h1 className='font-extrabold text-6xl font-display text-black'>My Experience</h1>
                </div>
                <ul className="flex flex-col mt-10">
                    {experience.map(({ duration, position, company, desc}: { duration: string, position: string, company:string, desc: string }) => (
                        <li key={experience} className="flex flex-row mt-10">
                           <div className='flex flex-col justify-start align-top w-1/3 '>
                                <h1 className='flex justify-end border-b-2 pb-2 border-blue-light  text-md text-black font-roboto font-bold'>{duration}</h1>
                                <h1 className='flex justify-end text-md text-grey font-roboto pt-2'>{company}</h1>
                           </div>
                           <div className='flex flex-col w-2/3 pl-4'>
                                <h1 className='text-2xl font-display font-semibold text-blue'>{position}</h1>
                                <p className='text-md text-black font-normal leading-normal mt-5 font-barlow '>{desc}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills