import React from 'react'
import profile from '../../assets/profile.jpg'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { motion } from "framer-motion";
import { scaleVariants } from '../../constants/scaleVariants'
import { BsFillNodePlusFill } from 'react-icons/bs';

function SkillsCard() {
  return (
    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="cursor-pointer py-4 px-2 group relative">
        <div className='w-full relative'>
            <div className='w-full drop-shadow rounded-r-full text-dark_primary  dark:bg-dark_secondary bg-secondary px-4 group-hover:bg-opacity-20 py-2'>
                <p className="text-sm font-bold uppercase italic">React Js</p>
            </div>
            <div className='absolute -top-1.5 -right-2 text-secondary rounded-full w-12 h-12 p-1 bg-secondary_2 dark:bg-dark_secondary_2'>
                <img src={profile} className='h-full w-full object-cover rounded-full'/>
            </div>
            <ul className="group-hover:flex justify-end gap-2 hidden duration-700 ease-in-out delay-700 absolute right-0 top-0 px-8 rounded-t-xl text-dark_primary">
                <li className='rounded-full p-2 hover:bg-secondary duration-300 ease-in-out'><AiFillDelete size={20}/></li>
                <li className='rounded-full p-2 hover:bg-secondary duration-300 ease-in-out'><AiFillDelete size={20}/></li>
            </ul>
        </div>

    </motion.div>
  )
}


export default function Skills() {
  return (
    <div className='lg:px-8 px-4 py-12 bg-secondary_2 dark:bg-dark_secondary_2'>
        <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-between">
            <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-dark_primary  w-full'>Skills and Compentencies</h1>

            <div className='text-btn font-bold'>
                <BsFillNodePlusFill size={30}/>
            </div>
        </motion.div>

        <motion.hr whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='border-dark_primary border-4 w-24 mb-2'/>
        
        <div
        className='grid lg:grid-cols-2 gap-2 my-4'>
            <div
            className='py-2'>
                <motion.h2 whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='italic font-bold text-btn  mb-2'>Technical skills</motion.h2>
                <div className='grid lg:grid-cols-3 gap-2'>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                </div>
            </div>
            <div
            className='py-2'>
                <motion.h2 whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='italic font-bold text-btn  mb-2'>Proffesional skills</motion.h2>
                <div className='grid lg:grid-cols-2 gap-2'>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                </div>
            </div>

        </div>
        
    </div>

  )
}
