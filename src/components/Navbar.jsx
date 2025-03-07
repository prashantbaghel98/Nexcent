import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../Context'
import { AlignJustify } from 'lucide-react';


const Navbar = () => {
  const { onOpen } = useModal();

  const [toggle, settoggle] = useState(false);

  let toggleBtn = () => {
    if (toggle === false) {
      settoggle(true)
      console.log("Open")
    }
    else {
      settoggle(false)
      console.log("Close")
    }
  }

  return (
    <>



      <nav className='flex justify-between items-center px-2 sm:px-50  md:px-10 py-5'>
        <div className="logo flex gap-2">
          <img src="./logo.png" alt="" className='w-5 h-5' />
          <h1 className='text-xl font-bold'>NEXCENT</h1>
        </div>


        <div className="hidden sm:flex items-center gap-5">
          <ul className=' text-[#4D4D4D] gap-5 sm:flex'>
            <Link to={Navbar}><li>Home</li></Link>
            <Link to={Navbar}><li>Features</li></Link>
            <Link to={Navbar}><li>Community</li></Link>
            <Link to={Navbar}><li>Blog</li></Link>
            <Link to={Navbar}><li>Pricing</li></Link>
          </ul>
          <div>
            <button onClick={onOpen} className='flex gap-2 items-center'>Register Now <img src="./white-arrow.png" alt="" className='mt-1' /></button>
          </div>
        </div>
        <AlignJustify className='sm:hidden' onClick={toggleBtn}/>

      </nav>


      
      <div className={`sm:hidden flex-col px-5 py-2 gap-5 ${toggle?"flex":"hidden"}`}>
          <ul className=' text-[#4D4D4D] gap-5 sm:flex'>
            <Link to={Navbar}><li>Home</li></Link>
            <Link to={Navbar}><li>Features</li></Link>
            <Link to={Navbar}><li>Community</li></Link>
            <Link to={Navbar}><li>Blog</li></Link>
            <Link to={Navbar}><li>Pricing</li></Link>
          </ul>
          <div>
            <button onClick={onOpen} className='flex gap-2 items-center'>Register Now <img src="./white-arrow.png" alt="" className='mt-1' /></button>
          </div>
        </div>

    </>
  )
}

export default Navbar
