"use client"

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

//icons
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="flex justify-between font-title text-headings border-b border-gray-300 lg:border-none py-6 lg:py-4  px-5">
      <div className="flex items-center">
        <ul className="flex justify-between gap-7 items-center">
          <li>
            <Link href={'/'} >
              <Image src="/Images/workafy-logo.svg" alt="logo" width={120} height={50} />
            </Link>
          </li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/'} >Hire X</Link></li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/'} >Find Work</Link></li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/'} >Why.....Afy?</Link></li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between gap-6 items-center">
          <li className="hidden lg:block font-15  hover:text-customGreen hover:cursor-pointer">
            <IoSearchOutline />
          </li>
          <li className="hidden lg:block font-15  hover:text-customGreen hover:cursor-pointer">Log in</li>
          <li className="font-15  hover:text-customGreen hover:cursor-pointer">Join</li>
          <li className="lg:hidden  text-xl  hover:text-customGreen hover:cursor-pointer" onClick={toggleMenu}>
            <HiOutlineMenuAlt3 />
          </li>
          <li className='hidden lg:block'>
            <Link href={'/'} >
              <Button buttonText="Assign Work" btnColor="customRed"/>
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" >
          <div className="absolute top-0 left-0 bg-white w-[calc(80vw)] sm:w-96 h-screen">
            <div className='text-center text-xl font-semibold bg-green-50 py-4 border-b border-gray-300'>Menu</div>
            <ul className="py-6">
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4 hover:bg-green-50 font-semibold" ><a href={'/'} >HOME  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4   hover:bg-green-50 font-semibold" ><a href={'/'} >HIRE X  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >FIND WORK  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >WHY.....AFY?  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >SIGN UP?  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >LOG IN  </a></li>
            </ul>
          </div>

        </div>
      )}


    </nav>
  );
};

export default Navbar;
