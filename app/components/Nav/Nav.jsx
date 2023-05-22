import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logosf.png'
import Link from 'next/link'

function Nav() {
  return (
    <aside className='flex flex-col'>
        <div className='m-10 ml-14'>
            <Image
            src={logo}
            alt="Logo of Alejo Paulon"
            width={100}
            height={100}
            />
        </div>
        <div className='flex flex-col text-center m-12 font-mono font-semibold'>
            <Link href="/" className='pb-2 text-lg text-gray-500 transform duration-300 hover:text-white'>Home</Link>
            <Link href="/about" className='p-2 text-lg text-gray-500 transform duration-300 hover:text-white'>About</Link>
            <Link href="/projects" className='p-2 text-lg text-gray-500 transform duration-300 hover:text-white'>Projects</Link>
        </div>
    </aside>
    
  )
}

export default Nav