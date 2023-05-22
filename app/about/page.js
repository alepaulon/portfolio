import Link from "next/link"

export default function About() {
    return (
        <div className='m-24'>
            <div className='flex flex-col justify-between m-6'>
                <h1 className='mb-10 text-4xl font-mono font-semibold'>About Me</h1>
                <span className='flex flex-row'>
                    <div className='m-4 flex flex-col justify-around max-w-3xl'>
                    <h2 className='pb-2'>My name is <b>Alejo Paulón</b>, I'm a 24 years old guy from Argentina.</h2>
                    <h2 className='pt-4'>I've been interested in the tech world since my childhood, but I got fully involved into learning Web Development during the pandemic, early 2021.</h2>
                    <h2 className='pt-4'>As of now, my stack is <b>Javascript, React, NextJS & TailwindCSS.</b> With plenty more to discover about this world, I'd like to get a job to apply my knowledge and keep learning new things.</h2>
                    <Link href="/projects" className='pt-4 flex flex-row text-gray-400 transform duration-300 hover:text-white'>Check my projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pl-2 pt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg></Link>
                    </div>
                </span>
            </div>
        </div>
    )
  }