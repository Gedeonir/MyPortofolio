import React from 'react'
import profile from '../../assets/profile.jpg'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { motion } from "framer-motion";
import { scaleVariants } from '../../constants/scaleVariants'
import { BsFillNodePlusFill } from 'react-icons/bs';

function SkillsCard({skill}) {
  return (
    <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="cursor-pointer py-2 px-2 rounded-lg hover:border hover:dark_primary transition-all  duration-300 ease-in-out relative drop-shadow  text-dark_primary  dark:bg-dark_secondary bg-secondary w-fit">
        <div className='flex justify-start'>
            <div className='text-secondary w-8 h-8 bg-secondary_2 rounded-full  my-2'>
                <img src={profile} className='h-full w-full object-cover rounded-full'/>
            </div>
            <div className='py-2 px-2'>
                <p className="font-bold">{skill}</p>
            </div>
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
            <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-dark_primary  w-full'>Things I can do</h1>

            <div className='text-btn font-bold'>
                <BsFillNodePlusFill size={30}/>
            </div>
        </motion.div>

        <motion.hr whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='border-dark_primary border-4 w-24 mb-2'/>
        <div
        className='py-2'>
            <div className='flex justify-start flex-wrap gap-4'>
                <SkillsCard skill="UI/UX design"/>
                <SkillsCard skill="Deployment"/>
                <SkillsCard skill="Web and Mobile apps development"/>
                <SkillsCard skill="Database management"/>
                <SkillsCard skill="CI/CD"/>
                <SkillsCard skill="Software testing"/>
                <SkillsCard skill="Data structures and algorithm"/>
                <SkillsCard skill="Version control with Git"/>
                <SkillsCard skill="conflict management skills"/>
                <SkillsCard skill="Effective Communication"/>
                <SkillsCard skill="Analytical skills"/>
                <SkillsCard skill="decision making"/>
                <SkillsCard skill="Project management"/>
                <SkillsCard skill="Mentorship"/>
            </div>
        </div>       
    </div>

  )
}
