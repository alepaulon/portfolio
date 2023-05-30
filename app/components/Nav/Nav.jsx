import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logosf.png'
import Link from 'next/link'

function Nav() {
  return (
    <aside className='flex flex-col'>
        <div className='m-2 ml-2 lg:m-10 lg:ml-14 flex justify-center lg:justify-normal'>
            <Image
            src={logo}
            alt="Logo of Alejo Paulon"
            width={100}
            height={100}
            />
        </div>
        <div className='flex lg:flex-col text-center mt-10 lg:m-12 font-mono font-semibold sm:flex-row justify-center lg:justify-normal'>
            <Link href="/" className='p-2 text-lg text-gray-500 transform duration-300 hover:text-white'>Home</Link>
            <Link href="/projects" className='p-2 text-lg text-gray-500 transform duration-300 hover:text-white'>Projects</Link>
            <Link href="/about" className='p-2 text-lg text-gray-500 transform duration-300 hover:text-white'>About</Link>
        </div>
    </aside>
    
  )
}

export default Nav