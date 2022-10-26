import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <div className='py-24 px-12 lg:px-48 font-Montserrat'>
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
