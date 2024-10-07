import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className='bg-[#2ed0f5] fixed top-0 right-0 left-0 z-50'>
      <div className='flex py-8 flex-wrap justify-around'>
        <h1 className='text-lg font-semibold'>TODO APP</h1>
        <ul className='flex cursor-pointer gap-[40px] text-medium'>
          <li>
            <Link href="/" className='font-bold'>Home</Link>
          </li>
          <li>
            <Link href="/about" className='font-bold'>About</Link>
          </li>
          <li>
            <Link href='/contact' className='font-bold'>Contact</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
