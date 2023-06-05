import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import profile from '../../assets/profile.jpg'
import { motion } from "framer-motion";
import { scaleVariants } from '../../constants/scaleVariants'
import ProjectDetails from './ProjectDetails';
import { useState } from 'react'
import { BsFillNodePlusFill } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import AddProjectModal from './AddProjectModal';
import DeleteModal from '../../components/deleteModal';

function ProjectCard({openDetails,setOpenDetails,openDeleteModal,setOpenDeleteModal}){
    const [open,setOpen]=React.useState(false);
    return(
        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
         className='w-full h-72 relative group'>
            <img src={profile} alt='profile_image' className='w-full h-full object-cover'/>
            <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='w-full h-72 hidden group-hover:block absolute top-0 left-0 right-0 p-12 bg-secondary_2 dark:bg-dark_secondary_2'>
                <div className=' absolute top-4  right-4 group'>
                    <BiDotsVerticalRounded size={25} onClick={()=>setOpen(!open)} className='hover:opacity-50 duration-100 ease-in-out text-dark_primary '/>
                    {open&&
                    <ul className='shadow-lg bg-secondary dark:bg-dark_secondary absolute rounded-l-lg rounded-b-lg top-8 right-5 py-2 w-12 text-xs  text-dark_primary'>
                        <li className='font-bold px-2 text-left cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 duration-200 ease-in-out p-1'>Edit</li>
                        <li onClick={()=>{setOpenDeleteModal(!openDeleteModal);setOpen(!open)}} className='font-bold px-2 text-left cursor-pointer hover:bg-background_secondary hover:bg-opacity-20 duration-200 ease-in-out p-1'>Delete</li>
                    </ul>}
                </div>
                <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-dark_primary  w-full text-center'>Project Phantom</h1>
                <p className='text-center text-yellow uppercase italic tracking-widest font-bold text-xs my-4'>React,Node,Material UI,Node,Postgres</p>
                <div  className='border-btn border-2 mx-auto text-secondary py-2 px-4 w-52 my-8 text-center font-bold cursor-pointer duration-300 ease-in-out  bg-btn uppercase' onClick={()=>setOpenDetails(!openDetails)}>
                    Explore more
                </div>
            </motion.div>
        </motion.div>
    )
}



export default function Projects(){
    const [openDetails,setOpenDetails]=useState(false);
    const [openRegisterModal,setOpenRegisterModal]=useState(false);
    const [openDeleteModal,setOpenDeleteModal]=useState(false)

    return(
        <div className='lg:px-8 px-4 py-12 relative'>
            <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }} 
            className="flex justify-between">
                <h1 className='font-bold uppercase relative text-xl tracking-widest text-dark_primary  w-full'>Projects</h1>

                <div className='text-btn font-bold cursor-pointer duration-300 ease-in-out' onClick={()=>setOpenRegisterModal(!openRegisterModal)}>
                    <BsFillNodePlusFill size={35}/>
                </div>
            </motion.div>
            <motion.hr whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='border-dark_primary border-4 w-24 mb-2'/>


            <div className="grid lg:grid-cols-3 my-8 text-dark_primary">
                <ProjectCard setOpenDetails={setOpenDetails} openDetails={openDetails} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
                <ProjectCard setOpenDetails={setOpenDetails} openDetails={openDetails} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
                <ProjectCard setOpenDetails={setOpenDetails} openDetails={openDetails} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
                <ProjectCard setOpenDetails={setOpenDetails} openDetails={openDetails} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
            </div>
            <div className='flex justify-center gap-2'>
                <div className='w-8 h-8 text-sm p-1 font-bold text-secondary  text-center bg-btn  cursor-pointer'>
                    <p className='mx-auto'>1</p>
                </div>
                <div className='w-8 h-8 text-sm p-1 font-bold text-btn  text-center border border-btn  cursor-pointer duration-300 ease-in-out hover:text-secondary hover:bg-btn hover:bg-opacity-90'>
                    <p className='mx-auto'>2</p>
                </div>
                

            </div>
            {openDeleteModal&&<DeleteModal setOpenDeleteModal={setOpenDeleteModal} openDeleteModal={openDeleteModal}/>}

           {openDetails&&<ProjectDetails setOpenDetails={setOpenDetails} openDetails={openDetails}/>}
           {openRegisterModal&&<AddProjectModal setOpenRegisterModal={setOpenRegisterModal} openRegisterModal={openRegisterModal}/>}
        </div>
    )
}