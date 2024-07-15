import React from 'react'

const Navbar = () => {
  return (
   <>
   <header className='bg-black text-white'>
    <nav className='p-2'>
        <ul className='grid grid-flow-col'>
            <li>Buy Data</li>
            <li>Home</li>
            <li>Profile</li>
            <li>Log in</li>
            <li>Sign up</li>
            <li>Log out</li>
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Navbar