import React from 'react'
import { motion } from 'framer-motion'
import { scaleVariants } from '../../constants/scaleVariants'
import { Link } from 'react-router-dom'

export default function Contact() {
    return(
        <div className="py-12 lg:px-8 px-4  font-medium bg-secondary_2 dark:bg-dark_secondary_2">
            <h1 className='font-bold uppercase relative tracking-widest text-dark_primary  w-full'>Get in touch</h1>
            <hr className='border-dark_primary  border-2 w-24 mb-2'/>
            
            <div className="py-4 w-full mx-auto text-dark_primary ">
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
                className="w-full px-4">
                    <h2 className="font-bold mb-3 uppercase text-center text-btn">
                        Get in touch
                    </h2>
                    <div className="gap-2 mb-3 text-center">
                        <p>You can interact with me by clicking the button bellow. Any question,ideas or you can just say hi!</p>
                    </div>
                    <div className='w-full flex justify-center mx-auto'>
                        <Link to={"mailto:irafasha.jedy12@gmail.com"} className='border-btn border-2 text-secondary_2 py-2 px-4 text-center font-bold cursor-pointer duration-300 ease-in-out bg-btn'>Say Hi</Link>
                    </div>


                </motion.div>
            </div>

        </div>
    )
}