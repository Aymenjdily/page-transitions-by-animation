import Head from 'next/head'
import { motion } from 'framer-motion'
import { container, item } from '../Animation/Animation'

export default function Home() {
  return (
    <motion.div 
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:0.75, ease:"easeOut"}}
      exit={{opacity:1}}
      className="text-gray-900 absolute h-[100vh] top-0 left-0 w-full bg-orange-100 lg:px-48 px-16"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='mt-96 mb-52 p-1 overflow-hidden'>
          <motion.h1 
            animate={{y:0}}
            initial={{y:"100%"}}
            transition={{delay:0.5,duration:0.5}}
            className='text-6xl text-center lg:text-right lg:text-9xl font-bold uppercase'
          >
            Happy Pickle
          </motion.h1>
        </div>
        <div className='flex justify-between gap-10'>
          <div>
            <h2>
              Design
            </h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <motion.div variants={container} initial="hidden" animate="show" className='font-semibold'>
            <div className='overflow-hidden'>
              <motion.h3 variants={item}>This pickle gonna make you smile.</motion.h3>
            </div>
            <div className='overflow-hidden'>
              <motion.h3 variants={item}>Scottish designs to make you happy.</motion.h3>
            </div>
            <div className='overflow-hidden'>
              <motion.h3 variants={item}>Click contact for cool transition.</motion.h3>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  )
}
