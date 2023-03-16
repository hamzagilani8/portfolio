import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-wrap flex-row justify-around align-middle '>
            <div>
                <Image src={'/favicon.ico'} alt={''} width = "120" height="100"/>
            </div>
            <div className='flex align-middle justify-center'>
                <ul className='flex flex-row space-x-10 font-display font-normal text-base'>
                    <li className='hover:border-t-2 hover:text-blue border-blue pt-10'>
                        <a href='/'>HOME</a>
                    </li>
                    <li className='hover:border-t-2 border-blue pt-10 hover:text-blue'>
                        <a href='/'>ABOUT</a>
                    </li>
                    <li className='hover:border-t-2 border-blue pt-10 hover:text-blue'>
                        <a href='/'>SERVICES</a>
                    </li>
                    <li className='hover:border-t-2 border-blue pt-10 hover:text-blue'>
                        <a href='/'>PORTFOLIO</a>
                    </li>
                    <li className='hover:border-t-2 border-blue pt-10 hover:text-blue'>
                        <a href='/'>CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar