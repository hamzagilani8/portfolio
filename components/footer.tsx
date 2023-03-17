import React from 'react'

const Footer = ({ social, services }: { social: any, services: any }) => {
    const { contactLinks } = social
    const { service } = services
    return (
        <div className='flex flex-row bg-white py-40 px-52'>
            <div className='w-3/5 flex flex-col justify-start'>
                <h1 className='text-2xl text-black font-display font-extrabold'>Based in Pakistan, working worldwide.</h1>
                <h1 className='text-8xl text-black font-display font-extrabold underline underline-offset-8'>Get in touch</h1>
            </div>
            <div className='w1/5 ml-20'>
                <div>
                    <h1 className='font-extrabold text-xl font-display text-black'>Social Links</h1>
                </div>
                <ul className="flex lg:flex-col mt-10">
                    {contactLinks.map(({ social, link }: { social: string, link: string }) => (
                        <li key={social} className="flex flex-col">
                            <a className="text-md text-grey font-display font-medium" href={link}>{social}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-1/5 pl-10'>
                <div>
                    <h1 className='font-extrabold text-xl font-display text-black'>My Services</h1>
                </div>
                <ul className="flex lg:flex-col mt-10">
                    {service.map(({ title }: { title: string }) => (
                        <li key={title} className="flex flex-col">
                            <h2 className="text-md text-grey font-display font-medium">{title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default Footer