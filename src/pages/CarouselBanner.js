import React from 'react'
import profile from '../assets/profile.jpg'
import bgImage from '../assets/bgImage.png'
import {RiGithubLine,RiInstagramLine} from "react-icons/ri";
import {FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { scaleVariants } from '../constants/scaleVariants'
import Logo from '../assets/Logo.png'


export default function CarouselBanner() {
  return (
    <div className='lg:px-8 min-h-screen relative'>
      <div className='w-full px-8 lg:flex justify-between gap-4 bg-secondary dark:bg-dark_secondary lg:relative absolute min-h-screen max-h-screen lg:bg-opacity-0 bg-opacity-50'>
        <div className='lg:py-28 py-24 max-w-2xl'>
          <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }} className='text-dark_primary  '>
            <h1 className='font-bold uppercase relative lg:text-4xl tracking-widest max-w-md'>IRAFASHA GEDEON</h1>
            <p className='italic font-bold tracking-widest lg:text-2xl m-auto'>SOFTWARE DEVELOPER</p>
            <p className='text-xl mt-3 text-justify'>
              Highly motivated and self-driving individual with strong knowledge in software development. 
              Skilled in various  programing languages, with ability to learn new technologies.
              <Link className='underline italic'> My resume</Link>
            </p>

          <div
          className='text-secondary py-2 px-4 w-52 my-8 text-center font-bold cursor-pointer duration-300 ease-in-out hover:bg-opacity-90  bg-btn hover:dark:bg-opacity-50'>
            Check out my projects
          </div>
          </motion.div>
          

          <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='lg:flex justify-start gap-4 text-dark_primary '>
            <div className='flex gap-2'>
              <p className=''>Mobile:+250780689938</p>
            </div>
            <div className='flex gap-2'>
              <label>Email:</label>
              <p className>irafasha.jedy12@gmail.com</p>
            </div>

          </motion.div>
        </div>
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='lg:max-w-5xl w-full hidden lg:block py-4'>
          <img src={Logo} alt='profile_image' className='w-full h-full object-cover opacity-10 dark:opacity-5'/>
        </motion.div>


        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='px-4 py-4 lg:grid flex gap-4 justify-center lg:w-24 w-full '>
          <div className='cursor-pointer w-12 h-12 drop-shadow-xl shadow-xl rounded-full hover:bg-opacity-20 dark:hover:bg-opacity-50 duration-300 ease-in-out mx-auto text-dark_primary  overflow-hidden p-3 bg-primary dark:bg-dark_secondary_2 bg-opacity-10'>
            <FaLinkedinIn size={25}/>
          </div>
          <div className='cursor-pointer w-12 h-12 drop-shadow-xl shadow-xl rounded-full hover:bg-opacity-20 dark:hover:bg-opacity-50 duration-300 ease-in-out mx-auto text-dark_primary  overflow-hidden p-3 bg-primary dark:bg-dark_secondary_2 bg-opacity-10'>
            <RiGithubLine size={25}/>
          </div>
          <div className='cursor-pointer w-12 h-12 drop-shadow-xl shadow-xl rounded-full hover:bg-opacity-20 dark:hover:bg-opacity-50  duration-300 ease-in-out mx-auto text-dark_primary  overflow-hidden p-3 bg-primary dark:bg-dark_secondary_2 bg-opacity-10'>
            <RiInstagramLine size={25}/>
          </div>
          
        </motion.div>
      </div>
      
    </div>
  )
}
