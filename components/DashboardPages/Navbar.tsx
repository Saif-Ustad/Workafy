"use client"

import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

//icons
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from 'react';

import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import { GoArrowUpRight } from "react-icons/go";

//clerk
import { UserButton, useAuth } from "@clerk/nextjs";


//globel context
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const Navbar = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !(menuRef.current as HTMLElement).contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isMenuOpen]);


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
} ;



const { isSideMenuOpen, setIsSideMenuOpen } = useContext(GlobalContext);




  return (
    <nav className="flex justify-between font-title text-headings border-b border-[#f4f4f4] lg:border-none py-6 lg:py-5  px-5">
      <div className="flex items-center">
        <ul className="flex justify-between gap-[150px] items-center">
          <li>
            {/* <Link href={'/'} >
              <Image src="/Images/workafy-logo.svg" alt="logo" width={120} height={50} />
            </Link> */}
            <a href='/'>
              <Image src="/Images/workafy-logo.svg" alt="logo" width={120} height={50} />
            </a>
          </li>
          <li className='hidden lg:block text-[22px]' onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}><HiOutlineMenuAlt2 /></li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between gap-6 items-center">

          <li className='hidden lg:block'>
            <Link href={'/'} >
              <div className="py-[12px] bg-customDarkGreen  w-[180px] rounded-[5px] text-white font-semibold text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Boost My Profile <span className="text-[20px]"><GoArrowUpRight /></span></div>
            </Link>
          </li>

          <li className="hidden lg:block text-[22px]  hover:text-customGreen hover:cursor-pointer">
            <MdOutlineNotificationsActive />
          </li>

          <li className="hidden lg:block text-[22px]  hover:text-customGreen hover:cursor-pointer">
            <MdOutlineMarkEmailRead />
          </li>

          <li className="lg:hidden font-semibold  hover:text-customGreen hover:cursor-pointer"><a href="/dashboard">Boost Profile</a></li>

          <li className="lg:hidden  text-[22px]  hover:text-customGreen hover:cursor-pointer" onClick={handleMenuToggle}>
            <HiOutlineMenuAlt3 />
          </li>

          <li className='hidden lg:block '><UserButton /></li>


        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" >
          <div className="absolute top-0 left-0 bg-white w-[calc(80vw)] sm:w-96 h-screen" ref={menuRef} onClick={(e) => e.stopPropagation()}>
            <div className='text-center text-xl font-semibold bg-green-50 py-4 border-b border-gray-300'>Menu</div>
            <ul className="py-6">
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold"><a href={'/dashboard'}>My PROFILE</a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4   hover:bg-green-50 font-semibold" ><a href={'/dashboard'} >NOTIFICATIONS</a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/dashboard'} >HELP</a></li>

              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >LOGOUT </a></li>

            </ul>
          </div>

        </div>
      )}


    </nav>
  );
};

export default Navbar;
