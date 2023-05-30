import Link from "next/link"

export default function About() {
    return (
        <div className='lg:m-24'>
            <div className='flex flex-col justify-between items-center lg:items-start m-6'>
                <h1 className='my-10 text-4xl font-mono font-semibold'>About Me</h1>
                <span className='flex flex-row'>
                    <div className='m-4 flex flex-col justify-around min-w-[200px] lg:max-w-3xl'>
                        <h2 className='pt-4'>My name is <b>Alejo Paulón</b>, I'm a 24 years old guy from Argentina.</h2>
                        <h2 className='pt-4'>I've been interested in the tech world since my childhood, but I got fully involved into learning Web Development during the pandemic, early 2021.</h2>
                        <h2 className='pt-4'>As of now, my stack is <b>Javascript, React, NextJS & TailwindCSS.</b> With plenty more to discover about this world, I'd like to get a job to apply my knowledge and keep learning new things.</h2>
                        <h2 className='pt-4'>Wanna talk with me? Be free to contact me on my<Link href='https://www.linkedin.com/in/alejopaulon/' target="_blank" className="font-semibold"> LinkedIn</Link>.</h2>
                    </div>
                </span>
            </div>
        </div>
    )
  }