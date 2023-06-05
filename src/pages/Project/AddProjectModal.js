import React, { useState } from 'react'
import { scaleVariants } from '../../constants/scaleVariants'
import { motion } from "framer-motion";
import { AiFillCloseCircle } from 'react-icons/ai';
import DropImage from '../../components/DropImage';



export default function AddProjectModal({openRegisterModal,setOpenRegisterModal}) {
    const [pages,setPages]=useState("");
  return (
    <div  className='fixed bg-primary dark:bg-dark_secondary_2 min-h-screen top-0 bg-opacity-20 z-40 dark:bg-opacity-70 w-full left-0'>
        <div className='bg-secondary px-8 py-8 dark:bg-dark_secondary lg:max-w-2xl mx-auto min-h-screen max-h-screen overflow-y-auto relative'>
            <div className='flex justify-between mb-4'>
                <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-dark_primary  w-full'>Add new Project</h1>
                <div className='cursor-pointer hover:text-opacity-90 text-dark_primary ' onClick={()=>setOpenRegisterModal(!openRegisterModal)}>
                    <AiFillCloseCircle size={30}/>
                </div>
            </div>
                
            <motion.div 
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
             className='py-8'>
                <div className="mb-4">
                    <input type="text" name="names" placeholder="Enter Project name" className='w-full dark:bg-dark_primary bg-secondary_2 dark:bg-opacity-10 border-none  outline-none' required/>
                </div>
                <div className="mb-4">
                    <input type="text" name="names" placeholder="Enter Project Description" className='w-full dark:bg-dark_primary bg-secondary_2 dark:bg-opacity-10 border-none  outline-none' required/>
                </div>
                <div className="mb-4">
                    <textarea
                    className='w-full dark:bg-dark_primary bg-secondary_2  dark:bg-opacity-10 outline-none border-none' required
                    placeholder="Describe project in summary"
                    name="message"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <div className='flex justify-start gap-8 mb-2 text-dark_primary '>
                        <h2>Add images of projects project</h2>
                        <input type="text" name="names" value="4" onChange={(e)=>setPages(e.target.value)} className='w-12 h-8 dark:bg-dark_primary bg-secondary_2 dark:bg-opacity-10 border-none  outline-none' required/>
                    </div>
                    <div className='grid grid-cols-4 gap-2'>
                        <DropImage/>
                        <DropImage/>
                        <DropImage/>
                        <DropImage/>

                    </div>
                    
                </div>
                <button className='lg:mx-0 mx-auto text-secondary py-2 px-4 w-52 my-8 text-center font-bold cursor-pointer duration-300 ease-in-out hover:bg-opacity-90  bg-btn  hover:dark:bg-opacity-50'>Add new</button>
            </motion.div>
        </div>
    </div>
  )
}
