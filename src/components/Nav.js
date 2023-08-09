import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    
    //useState this for calling the icons. 
    let [open,setOpen]= useState(false);
  return (
    //start of the Navbar.
    <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex items-center justify-between bg-orange-100 py-2">
            <div className='font-bold text-2xl cursor-pointer flex items-center font-serif text-black'>
                <span className='text-6xl text-black mr-1 ml-1 pt-2 md:text-orange-400'>
                <ion-icon name="rocket-outline"></ion-icon>
                </span>
                <a href='/' className='text-orange-400 md:text-black'>React</a>
            </div>

            {/* menu button to create effect of menu andd close icon*/}
            <div onClick={()=>setOpen(!open)} 
                className='bg-orange-100 text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}/>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-100 
                md:z-auto left-0 w-full 
                md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
                ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                
                    <li className='md:ml-3 mr-2 text-xl md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-300'>HOME</Link>
                    </li>
                    <li className='md:ml-3 mr-2 text-xl md:my-0 my-7'>
                        <Link to='/About' className='text-gray-800 hover:text-gray-400 duration-300'>ABOUT</Link>
                    </li>
                    <li className='md:ml-3 mr-2 text-xl md:my-0 my-7'>
                        <Link to='/Contact' className='text-gray-800 hover:text-gray-400 duration-300'>CONTACT</Link>
                    </li>
                
                
                {/* button  */}
                <a href='IRAL_resume.pdf' download>
                    <button className='bg-orange-600 text-white font-serif py-2 px-6 
                            rounded md:ml-8 mr-2 hover:bg-orange-400 duration-500'>
                        Get Resume
                    </button>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Nav