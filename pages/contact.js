import React from 'react'
import { motion } from 'framer-motion'
import { container,item } from '../Animation/Animation'

const contact = () => {
  return (
    <motion.main 
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.75, ease:"easeOut"}}
        exit={{opacity:1}}
        className='text-gray-900 absolute top-0 left-0 w-full h-[100vh] bg-red-400 lg:px-48 px-16'
    >
        <div className='mt-96 mb-36 p-1 overflow-hidden'>
            <motion.h1 
                className='text-6xl text-center lg:text-right lg:text-9xl font-bold uppercase'
                animate={{y:0}}
                initial={{y:"100%"}}
                transition={{delay:0.5,duration:0.5}}    
            >
                Let's Talk
            </motion.h1>
        </div>
        <div className='flex gap-40'>
            <div className='lg:text-2xl text-base'>
                <h4>
                    Find me :
                </h4>
            </div>
            <div className='lg:text-6xl text-2xl underline'>
                <motion.ul variants={container} initial="hidden" animate="show">
                    <div className='overflow-hidden'>
                        <motion.li variants={item} className='pb-2'>Twitter</motion.li>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.li variants={item} className='pb-2'>Instagram</motion.li>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.li variants={item} className='pb-2'>Linkedin</motion.li>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.li variants={item} className='pb-2'>Youtube</motion.li>
                    </div>
                </motion.ul>
            </div>
        </div>
    </motion.main>
  )
}

export default contact