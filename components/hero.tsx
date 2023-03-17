import Image from 'next/image'
import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Hero = () => {
    return (
        <div className='flex flex-row justify-around mt-40'>
            <div className='flex-col justify-start pl-32 -mt-28'>
                <div className='text-sm font-barlow font-light text-grey mb-20'>
                    <p>HELLO, MY NAME IS</p>
                    <p>________</p>
                </div>
                <div>
                    <h1 className='text-8xl text-black font-display font-extrabold'>Hamza Gilani</h1>
                    <h3 className='text-4xl font-display font-extrabold text-grey'>Web Developer</h3>
                </div>
                <div className='flex flex-col justify-center align-middle text-lg font-roboto text-black mt-24'>
                    <span className='flex flex-row space-x-4'>
                    <EnvelopeIcon className="h-6 w-6 text-blue"/><h1>CONTACT@SYEDHAMZAGILANI.COM</h1>
                    </span>
                    <span className='flex flex-row space-x-4'>
                    <PhoneIcon className="h-6 w-6 text-blue"/><h1>+92 300 0870844</h1>
                    </span>
                </div>

            </div>
            <div>
            <div className='bg-right-top bg-gradient-to-r from-blue-light to-white-light rounded-full w-96 h-96 -z-20 ml-36 -mt-40'>
                </div>
                <Image src={'/Dp.jpg'} alt={''} width="450" height="450" className='rounded-full z-10 -mt-80' />
            </div>
        </div>
    )
}

export default Hero
