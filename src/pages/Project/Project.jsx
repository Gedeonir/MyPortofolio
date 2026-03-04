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

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      whileInView={{ opacity: [0, 1], y: [50, 0] }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Project Image */}
      <img
        src={project.icon || webdev}
        alt={project.projectName}
        className="w-full h-72 object-cover rounded-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80 rounded-2xl"></div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="text-md font-bold uppercase">{project.projectName}</h3>
        <p className="text-yellow text-xs mt-1 font-semibold">{project.projectDescription}</p>

        {/* Explore Button */}
        <div
          onClick={() => navigate(`/project?id=${project.projectCode}`, { replace: true })}
          className="mt-4 w-48 py-2 px-4 text-center font-bold rounded-lg bg-btn text-white uppercase transition duration-300 hover:bg-opacity-90"
        >
          Explore More
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.Tools?.map((tech) => (
            <span
              key={tech}
              className="bg-yellow text-primary px-2 py-1 rounded-full text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
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


            <div className="grid lg:grid-cols-3 gap-4 text-dark_primary py-4">
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