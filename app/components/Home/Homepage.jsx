import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../../../public/profilePicture.png' 

function Home() {
  return (
    <main>
        <div className='flex flex-col justify-between m-24'>
          <h1 className='mb-10 text-4xl font-mono font-semibold'>Alejo Paulón</h1>
          <span className='flex flex-row'>
            <Image
                src={profilePicture}
                alt="Profile picture of Alejo Paulon"
                height={125}
                width={125}
                className='grayscale transform duration-300 hover:grayscale-0'
            />
            <div className='m-4 flex flex-col justify-around max-w-3xl'>
              <h2 className='pb-2'>Hey, I'm Alejo, a <b>FrontEnd Developer</b> looking to help you and your team to improve your projects.</h2>
              <h2 className='pt-4'>My actual stack is <b>Javascript, React, NextJS, TailwindCSS</b> but I'm open to learn anything you need asap.</h2>
            </div>
          </span>
          <span className='flex flex-row justify-center'>
            <div className='flex flex-row my-10 pr-10 justify-center text-gray-600 transform duration-300 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              <Link href='https://github.com/hertz1e' target="_blank" className='px-2 font-semibold'>check my github</Link>
            </div>
            <div className='flex flex-row my-10 justify-center text-gray-600 transform duration-300 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              <Link href='https://www.linkedin.com/in/alejopaulon/' target="_blank" className='px-2 font-semibold'>check my linkedin</Link>
            </div>
          </span>
        </div>
    </main>
  )
}

export default Home