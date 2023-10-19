import React from 'react'
import profile from '../assets/profile.jpg'
import bgImage from '../assets/bgImage.png'
import {RiGithubLine,RiInstagramLine} from "react-icons/ri";
import {FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { scaleVariants } from '../constants/scaleVariants'
import Logo from '../assets/Logo.png'
import { BsArrowRight } from 'react-icons/bs';


export default function CarouselBanner() {
  return (
    <div className='lg:px-8 px-4 relative py-12'>
      <div className='w-full bg-secondary dark:bg-dark_secondary lg:bg-opacity-0 bg-opacity-50'>
          <div className='text-dark_primary  '>
            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}  className='flex justify-start gap-4'>
              <div className='w-24 h-24'>
                <img src={profile} className='h-full w-full object-cover rounded-full'/>
              </div>
              <div className='py-2'>
                <h1 className='font-bold uppercase relative lg:text-4xl tracking-widest max-w-md'>IRAFASHA GEDEON</h1>
                <p className='italic font-bold tracking-widest lg:text-2xl m-auto'>SOFTWARE DEVELOPER</p>
                <span>{new Date().getFullYear()-1999} years old <span className='text-lg font-bold'>.</span> Kigali,Rwanda</span>
              </div>

            </motion.div>
            <motion.div whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}>
              <p 
               className='text-xl mt-3 text-justify leading-10'>
                Experienced software developer with a strong foundation in various programming languages. Known for my ability to rapidly learn new technologies and adapt to evolving industry trends. Proficient in troubleshooting complex issues and skilled in optimizing application performance to ensure robust and efficient software solutions.<br/><br/>

                I became intrested in software development since high school, and by the time I got admitted to university I joined various software development programs like <span className='dark:text-secondary_2 text-primary font-bold underline italic '>Andela Technical Leadership Program - ATLP</span>  and <span className='dark:text-secondary_2 text-primary font-bold underline italic'>Solvit Africa</span> to grow my carrer.
                It has been <span className='dark:text-secondary_2 text-primary font-bold underline italic'>{new Date().getFullYear()-2021}+</span>  years in this carrer of software development and I have been able to contribute to various projects.
              </p>

              <div
              className='py-2 my-8 font-bold cursor-pointer duration-300 ease-in-out animate-pulse hover:bg-opacity-90  text-btn hover:dark:bg-opacity-50'>
                <Link to={"https://docs.google.com/document/d/1BiLz00uzeCuBnxPTylLltGmfRm79VKIe/edit?usp=sharing&ouid=118215390459819378421&rtpof=true&sd=true"} 
                className='flex justify-start gap-2' target='_blank'>
                  Get my resume <BsArrowRight className='my-1'/>
                </Link>
              </div>
            </motion.div>
          </div>
          

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
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='py-4 flex gap-4 justify-start lg:w-32 w-full'>
          <Link to={"https://www.linkedin.com/in/irafasha-gedeon-a64852189/"} target='_blank' className='flex gap-2 justify-start'>
            <div className='cursor-pointer w-8 h-8 drop-shadow-xl shadow-xl rounded-full hover:bg-opacity-20 dark:hover:bg-opacity-50 duration-300 ease-in-out lg:mx-auto text-btn  overflow-hidden p-2 bg-primary dark:bg-dark_secondary_2 bg-opacity-10'>
              <FaLinkedinIn size={15}/>
            </div>
            <span className='font-bold text-md py-1 text-btn'>Linkedin</span>
          </Link>
          <Link to={"https://github.com/Gedeonir/"} target='_blank' className='flex gap-2 justify-start'>
            <div className='cursor-pointer w-8 h-8 drop-shadow-xl shadow-xl rounded-full hover:bg-opacity-20 dark:hover:bg-opacity-50 duration-300 ease-in-out lg:mx-auto text-btn overflow-hidden p-2 bg-primary dark:bg-dark_secondary_2 bg-opacity-10'>
              <RiGithubLine size={15}/>
            </div>
            <span className='font-bold text-md py-1 text-btn'>GitHub</span>
          </Link>
                    
        </motion.div>
      
    </div>
  )
}
