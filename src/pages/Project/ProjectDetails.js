import React from 'react'
import { motion } from 'framer-motion'
import { scaleVariants } from '../../constants/scaleVariants'
import profile from '../../assets/profile.jpg'
import { AiFillCloseCircle } from 'react-icons/ai';
import { projects } from '../../utils/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiWarning } from 'react-icons/ci';


export default function ProjectDetails({openDetails,setOpenDetails}) {

    const location=useLocation();
    const oneProject=projects.filter(item=> item.projectCode==location.search.split('id=')[1]);
    const navigate=useNavigate()

  return (
    <div  className='fixed bg-primary dark:bg-dark_secondary_2 min-h-screen top-0 bg-opacity-20 dark:bg-opacity-70 w-full left-0 z-20'>
        <div className='bg-secondary dark:bg-dark_secondary lg:w-4/5 mx-auto min-h-screen max-h-screen overflow-y-auto pb-3 relative'>
            <div className='py-2 sticky pl-4 w-12 top-0 rounded-r-full -left-2 absolute z-40 text-btn cursor-pointer hover:text-opacity-90 shadow-lg drop-shadow' onClick={()=>navigate("/",{replace:true})}>
                <AiFillCloseCircle size={20} className=''/>
            </div>
            {oneProject.length<=0?(
                <div className='min-h-screen flex items-center justify-center'>
                    <div className="bg-secondary  text-yellow p-2">
                        <CiWarning size={30}/>
                    </div>
                    <p className='text-center text-dark_primary'>Ooops,no such project found</p>
                </div>
            ):(
                oneProject.map(project=>(
                    <motion.div>                   

                        <div className='px-8 pt-8 mb-3 flex justify-between sticky top-0 bg-secondary dark:bg-primary'>
                            
                            <div>
                                <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-btn w-full'>{project.projectName}</h1>
                                <span className='uppercase text-sm text-btn text-opacity-60 font-bold'>{project.projectDescription} (<span className='text-yellow'>{project.developedBy} Project</span>)</span>
                            </div>
                            <div className='lg:text-xl font-bold text-yellow'>
                                <span>{project.yearDeveloped}</span>
                            </div>
                        
                        </div>

                        <div className='px-8 pb-3 text-dark_primary'>
                            <h2 className='font-bold mb-2'>Project overview</h2>
                            <div className='mb-2' dangerouslySetInnerHTML={{ __html: project.overview }}/>
                                
                            {project.developedBy.toLocaleLowerCase()=='team' &&
                                <>
                                    <h2 className='font-bold mb-2'>My key contributions on project</h2>
                                    <div className='mb-2' dangerouslySetInnerHTML={{ __html: project.contributions }}/>
                                </>
                            }

                            <h2 className='font-bold mb-2'>Tools used</h2>
                            <div className='flex justify-start flex-wrap mb-2'>
                                
                                {project.Tools.map(tool=>(
                                    <label key={tool} className='text-center capitalize'>
                                        {tool},
                                    </label>
                                ))}
                            </div>

                            <h2 className='font-bold mb-2'>Project pages</h2>
                            <div className='mb-2 grid lg:grid-cols-2 gap-4'>
                                {project.pages.length<=0?(
                                    <p className='text-center text-dark_primary'>No images added yet</p>

                                ):(
                                    project.pages.map((page)=>(
                                        <div key={page.page}>
                                            <div className='w-full col-span-2'>
                                                <img src={page.image} alt='page_image' className='w-full h-full'/>
                                            </div>
                                            <p className='text-center text-dark_primary'>
                                                {page.page}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>                 

                        </div>

                        <Link to={`${project.Link}`} target='_blank'
                        className='bg-btn mx-8 text-secondary py-2 px-4 w-32 text-center font-bold cursor-pointer duration-300 ease-in-out hover:bg-opacity-20'>
                            Visit site
                        </Link>


                    </motion.div>
                ))
            )}
        </div>
    </div>
  )
}
