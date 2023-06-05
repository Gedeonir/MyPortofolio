import React from 'react'

export default function About() {
  return (
    <div  className='fixed bg-primary dark:bg-dark_secondary_2 min-h-screen top-0 bg-opacity-20 dark:bg-opacity-70 w-full left-0 z-20'>
        <div className='bg-secondary dark:bg-dark_secondary lg:max-w-2xl mx-auto min-h-screen max-h-screen overflow-y-auto py-8 px-8 relative'>
            <div className='flex justify-between mb-4'>
                <div>
                    <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-primary w-full'>IRAFASHA Gedeon</h1>
                    <span className='uppercase text-sm text-primary text-opacity-60 font-bold'>Software Developer</span>
                </div>
                <div
                className='drop-shadow-lg shadow-lg text-xs ml-auto mr-4 text-secondary py-2 px-4 w-40 h-8 text-center font-bold cursor-pointer duration-300 ease-in-out hover:bg-opacity-90  bg-primary dark:bg-dark_primary hover:dark:bg-opacity-50'>
                    Check out my CV
                </div> 
            </div>

            <div className='text-dark_secondary dark:text-secondary_2'>
                <p>
                    I am <span className='font-bold'>IRAFASHA Gedeon</span>,
                    a highly motivated and self-driving individual with strong knowledge in software development. 
                    Skilled in various  programing languages, with ability to learn new technologies.
                </p>
            </div>
            
        </div>
    </div>
  )
}
