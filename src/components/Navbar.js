import React from 'react'
import {AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import {GiAmbulance} from 'react-icons/gi'
import {BsVirus} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {CiGrid41, CiTwitter} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import {BiArrowBack} from 'react-icons/bi'
import Switcher from './Switcher'
import Logo from '../assets/Logo.png'
import { motion } from "framer-motion";
import { scaleVariants } from '../constants/scaleVariants'
import {GrClose, GrFormClose} from 'react-icons/gr'
import { RiCloseFill } from 'react-icons/ri'

const Links=[
    {
        link:'Home',
        path:"/"
    },
    {
        link:'Skills',
        path:"#Skills"
    },
    {
        link:'Projects',
        path:"/#projects"
    },
    {
        link:'Get in touch',
        path:"/"
    }


]
export function NavBar({openMenu,setOpenMenu}){
    const [searchWord,setSearchWord] = React.useState("");

    

    return(
        <div className='w-full px-8 grid  lg:grid-cols-4 grid-cols-2 gap-2 py-3 sticky top-0 z-10 bg-secondary bg-opacity-80 dark:bg-dark_secondary'>
            <div className='text-dark_primary font-bold  w-8 h-8'> 
                <img src={Logo} alt='profile_image' className='w-full h-full object-cover'/>
            </div>
            <ul className='lg:px-4 lg:flex justify-end gap-4 text-dark_primary  hidden w-full col-span-2'>
                {Links.map((link,index)=>(
                   <li className=' cursor-pointer duration-800 ease-out border-b-3 font-bold text-xl hover:text-btn' key={index}>
                        <Link to={link.path} className='flex gap-2 justify-start'> {link.link}</Link>
                    </li> 
                ))}              
            </ul>
            <div className="flex justify-end gap-4">
                <Switcher/>
                <div onClick={()=>setOpenMenu(!openMenu)} className='text-dark_primary block lg:hidden  duration-300 font-bold ease-in-out  hover:text-btn cursor-pointer'>
                 {!openMenu?<CiGrid41 size={25}/>:<RiCloseFill size={30}/>}
                </div>
            </div> 
           
        </div>
    )
}




export function PhoneMenu(){
    return(
        <div className='block absolute top-0 w-full lg:hidden bg-secondary py-64 px-12 dark:bg-dark_secondary min-h-screen max-h-screen'>
            <ul className='px-4  text-dark_primary  w-full col-span-2'>
                {Links.map((link,index)=>(
                   <motion.li
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: index }}
                    className=' cursor-pointer duration-800 ease-out border-b-3 font-bold text-xl flex justify-center py-4 hover:text-btn' key={index}>
                        <Link to={link.path} className='justify-center'> {link.link}</Link>
                    </motion.li> 
                ))}              
            </ul>
        </div>
    )
}

