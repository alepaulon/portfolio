import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../../../public/profilePicture.png' 

function Home() {
  return (
    <main>
        <div className='flex flex-col justify-between lg:m-24'>
          <h1 className='my-10 lg:mb-10 text-4xl font-mono font-semibold text-center lg:text-start'>Alejo Paulón</h1>
          <span className='flex flex-col lg:flex-row items-center'>
            <Image
                src={profilePicture}
                alt="Profile picture of Alejo Paulon"
                height={125}
                width={125}
                className='grayscale transform duration-300 hover:grayscale-0'
            />
            <div className='my-10 lg:pl-10 lg:m-4 flex flex-col justify-around max-w-3xl text-center lg:text-justify'>
              <h2 className='pb-2'>Hey, I'm Alejo, a <b>FrontEnd Developer</b> looking to help you and your team to improve your projects.</h2>
              <h2 className='pt-4'>My actual stack is <b>HTML, CSS, Javascript, React, NextJS, TailwindCSS, Bootstrap, SASS</b> but I'm open to learn anything you need asap.</h2>
            </div>
          </span>
          <span className='flex flex-row justify-center'>
            <div className='flex flex-col lg:flex-row my-10 pr-10 justify-center text-center text-gray-600 transform duration-300 hover:text-white'>
              <svg viewBox="0 0 1024 1024" fill="currentColor" className='max-h-12'><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" /></svg>
              <Link href='https://github.com/hertz1e' target="_blank" className='px-2 font-semibold'>check my github</Link>
            </div>
            <div className='flex flex-col lg:flex-row my-10 justify-center text-center text-gray-600 transform duration-300 hover:text-white'>
              <svg viewBox="0 0 960 1000" fill="currentColor" className='max-h-12'><path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" /></svg>
              <Link href='https://www.linkedin.com/in/alejopaulon/' target="_blank" className='px-2 font-semibold'>check my linkedin</Link>
            </div>
          </span>
        </div>
    </main>
  )
}

export default Home