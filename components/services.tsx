import Image from 'next/image'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Services = ({data}:{data:any}) => {
    const {service} = data
  return (
    <div className='flex flex-col lg:m-56 sm:m-10'>
        <div>
            <h1 className='text-6xl text-black font-display font-extrabold'>What I do</h1>
            <div className='flex flex-row justify-between mt-10'>
                <h1 className='text-md text-black font-display font-normal w-2/3'>From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.</h1>
                <ArrowLongRightIcon className="h-32 w-32 text-blue"/>
            </div>
        </div>
        <ul className="flex lg:flex-row sm:flex-col mt-10">
                {service.map(({title,icon,desc}: {title: string, icon: string,desc: string}) => (
                        <li key={title} className="flex flex-row lg:pl-2 sm:mb-4 sm:pb-4 lg:w-1/3 sm:w-full lg:border-r-2 border-blue-light">
                        <span>
                        <Image src={icon} alt={''} width="68" height="68" className='w-2/5'/>
                        </span>
                        <span className='flex flex-col w-3/5'>
                        <h2 className="text-2xl text-black font-barlow font-normal">{title}</h2>
                        <p className="text-base pt-4">{desc}</p>
                        </span>
                        </li>
                ))}
            </ul>
    </div>
  )
}

export default Services