import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const Portfolio = ({data}:{data:any}) => {
    const {work} = data
  return (
    <div className='flex flex-col lg:m-52'>
        <div className='flex flex-row flex-wrap-reverse justify-between'>
            <h1 className='w-2/3 font-extrabold text-6xl font-display text-black'>Portfolio</h1>
            <ArrowLongRightIcon className="h-32 w-32 text-blue"/>
        </div>
        <div>
        <ul className="flex lg:flex-row sm:flex-col mt-10">
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[0]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[1]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[2]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
            </ul>
            <ul className="flex lg:flex-row sm:flex-col mt-5">
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[3]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[4]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[5]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
            </ul>
            <ul className="flex lg:flex-row sm:flex-col mt-5">
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[6]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[7]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
                        <li  className="flex flex-row lg:p-5 lg:w-1/3 sm:w-full">
                        <Image src={work[8]} alt={''} width="450" height="450" className='rounded'/>
                        </li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio