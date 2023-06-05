import React from 'react'
import { motion } from 'framer-motion'
import { scaleVariants } from '../../constants/scaleVariants'
import profile from '../../assets/profile.jpg'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AiFillCloseCircle } from 'react-icons/ai';


export default function ProjectDetails({openDetails,setOpenDetails}) {

    const options = {
        nav: true,

        navText: ["<div class='bg-btn text-secondary w-8 h-8 absolute inset-y-40 left-0 text-xl'>‹</div>", "<div class='bg-btn text-secondary w-8 h-8 absolute inset-y-40 right-0 text-xl'>›</div>"],        // autoplay: true,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
      };

  return (
    <div  className='fixed bg-primary dark:bg-dark_secondary_2 min-h-screen top-0 bg-opacity-20 dark:bg-opacity-70 w-full left-0 z-20'>
        <div className='bg-secondary dark:bg-dark_secondary lg:max-w-2xl mx-auto min-h-screen max-h-screen overflow-y-auto pb-3 relative'>
            <motion.div 
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}>
                <OwlCarousel className="w-full owl-theme owl-carousel relative" {...options} >
                    <div className='w-full h-96 relative'>
                        <img src={profile} alt='profile_image' className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-full h-96 relative'>
                        <img src={profile} alt='profile_image' className='w-full h-full object-cover'/>
                    </div>
                </OwlCarousel>

                <div className='py-2 pl-4 w-12 top-96 rounded-r-full -left-2 absolute z-40 text-btn cursor-pointer hover:text-opacity-90 shadow-lg drop-shadow' onClick={()=>setOpenDetails(!openDetails)}>
                    <AiFillCloseCircle size={20} className=''/>
                </div>
                

                <div className='px-8 mb-3 flex justify-between'>
                    <div>
                        <h1 className='font-bold uppercase relative lg:text-xl tracking-widest text-btn w-full'>Phantom project</h1>
                        <span className='uppercase text-sm text-btn text-opacity-60 font-bold'>Bus Tracking Project</span>
                    </div>
                    <div className='lg:text-xl font-bold text-yellow'>
                        <span>2022</span>
                    </div>
                
                </div>

                <div className='px-8 pb-3 text-dark_primary'>
                    <p>
                        Anim aute eiusmod irure ipsum laborum anim dolor dolore eiusmod sunt. Dolor velit dolore exercitation Lorem do mollit do. Duis nostrud ex minim irure enim sunt culpa officia qui reprehenderit reprehenderit.
                    </p>
                </div>

                <div
                className='bg-btn mx-8 text-secondary py-2 px-4 w-32 text-center font-bold cursor-pointer duration-300 ease-in-out hover:bg-opacity-20'>
                    Visit site
                </div>


            </motion.div>
        </div>
    </div>
  )
}
