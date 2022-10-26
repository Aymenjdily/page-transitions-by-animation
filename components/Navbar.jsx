import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-2xl font-medium z-20 relative'>
        <ul className='flex gap-12 font-bold capitalize'>
            <Link href="/">
                <li>
                    home
                </li>
            </Link>
            
            <Link href="/contact">
                <li>
                    contact
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar