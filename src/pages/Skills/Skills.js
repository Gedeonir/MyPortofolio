import React from 'react'
import profile from '../../assets/profile.jpg'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { motion } from "framer-motion";
import { scaleVariants } from '../../constants/scaleVariants'
import { BsFillNodePlusFill } from 'react-icons/bs';
import { skills } from '../../utils/data';


function SkillsCard({skill}) {
  return (
    <div className="cursor-pointer py-1 px-2 rounded-lg border border-secondary dark:border-dark_primary hover:border-dark_primary dark:hover:border-secondary hover:dark_primary transition-all delay-100  duration-300 ease-in-out relative drop-shadow  text-dark_primary  dark:bg-dark_secondary bg-secondary w-fit">
        <div className='flex justify-start items-center'>
            <div className='w-12 h-8'>
                <img src={skill?.icon} className='h-full w-full object-contain'/>
            </div>
            <div className='py-2 px-2'>
                <p className="font-bold">{skill?.skillName}</p>
            </div>
        </div>

    </div>
  )
}


export default function Skills() {
  return (
    <div className='lg:px-8 px-4 py-8 bg-secondary_2 dark:bg-dark_secondary_2'>
        <div
        className="flex justify-between">
            <h1 className='font-bold uppercase relative tracking-widest text-dark_primary  w-full'>Things i can do</h1>

            {/* <div className='text-btn font-bold'>
                <BsFillNodePlusFill size={30}/>
            </div> */}
        </div>

        <hr className='border-dark_primary border-2 w-24 mb-2'/>
        <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
        className='py-2'>
            <div className='flex justify-start flex-wrap gap-4 py-4'>
                {skills.map(element=>(
                    <SkillsCard key={element?.skillID} skill={element}/>
                ))}
            </div>
        </motion.div>       
    </div>

  )
}
