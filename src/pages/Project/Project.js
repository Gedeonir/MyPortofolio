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
import { projects } from '../../utils/data';
import webdev from '../../assets/icons/webdev.png'
import { useLocation, useNavigate } from 'react-router-dom';

function ProjectCard({openDetails,setOpenDetails,openDeleteModal,setOpenDeleteModal,project,setId}){
    const [open,setOpen]=React.useState(false);
    const navigate=useNavigate();
    
    return(
        <motion.div  whileInView={{ y: [100, 0], opacity: [0, 1] }}      transition={{ duration: 0.5 }}
        className='relative isolate flex flex-col justify-end overflow-hidden rounded-t-lg px-4 pb-4 pt-40 w-full mx-auto mt-2 group'>
            <img src={project.icon?project.icon:webdev} alt='profile_image' className='absolute inset-0 h-full w-full object-cover'/>

            <div className='absolute inset-0 bg-gradient-to-t from-[rgb(33,33,33)] via-[rgb(33,33,33,0.3)]'></div>
            <h3 className='z-10 mt-3 text-lg font-bold text-secondary'>{project.projectName}</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-yellow font-bold'>{project.projectDescription}</div>
            <div
            className='w-full  h-full inset-0 z-20 dark:bg-opacity-30 bg-opacity-50 hidden group-hover:flex items-center absolute top-0 left-0 right-0 px-4 py-8 bg-secondary_2 dark:bg-dark_secondary_2'>
                <div  className='border-btn border-2 mx-auto text-secondary py-2 px-4 w-52 my-8 text-center font-bold cursor-pointer duration-300 ease-in-out  bg-btn uppercase' 
                onClick={()=>{
                    navigate(`/project?id=${project.projectCode}`,{replace:true})
                }}>
                    Explore more
                </div>
            </div>
        </motion.div>
    )
}



export default function Projects(){
    const [openDetails,setOpenDetails]=useState(false);
    const [openRegisterModal,setOpenRegisterModal]=useState(false);
    const [openDeleteModal,setOpenDeleteModal]=useState(false)
    const location=useLocation();


    return(
        <div className='lg:px-8 px-4 py-8'>
            <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }} 
            className="flex justify-between">
                <h1 className='font-bold uppercase relative tracking-widest text-dark_primary  w-full'>Projects</h1>

                {/* <div className='text-btn font-bold cursor-pointer duration-300 ease-in-out' onClick={()=>setOpenRegisterModal(!openRegisterModal)}>
                    <BsFillNodePlusFill size={35}/>
                </div> */}
            </motion.div>
            <motion.hr whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='border-dark_primary border-2 w-24 mb-2'/>


            <div className="grid lg:grid-cols-3 gap-2 text-dark_primary py-4">
                {projects.map(project=>(
                    <ProjectCard key={project.projectCode} setOpenDetails={setOpenDetails} openDetails={openDetails} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} project={project}/>
                ))}
            </div>
            {/* <div className='flex justify-center gap-2'>
                <div className='w-8 h-8 text-sm p-1 font-bold text-secondary  text-center bg-btn  cursor-pointer'>
                    <p className='mx-auto'>1</p>
                </div>
                <div className='w-8 h-8 text-sm p-1 font-bold text-btn  text-center border border-btn  cursor-pointer duration-300 ease-in-out hover:text-secondary hover:bg-btn hover:bg-opacity-90'>
                    <p className='mx-auto'>2</p>
                </div>
                

            </div> */}
            {openDeleteModal&&<DeleteModal setOpenDeleteModal={setOpenDeleteModal} openDeleteModal={openDeleteModal}/>}

           {(location.pathname.includes("project") && location.search.includes("?id=")) && <ProjectDetails setOpenDetails={setOpenDetails} openDetails={openDetails}/>}
           {openRegisterModal&&<AddProjectModal setOpenRegisterModal={setOpenRegisterModal} openRegisterModal={openRegisterModal}/>}
        </div>
    )
}