"use client"

import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

//icons
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from 'react';

//clerk
import { UserButton, useAuth } from "@clerk/nextjs";


const Navbar = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

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

  
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto'; // Reset overflow on unmount or when isMenuOpen changes
  //   };
  // }, [isMenuOpen]);


  return (
    <nav className="flex justify-between font-title text-headings border-b border-gray-300 lg:border-none py-6 lg:py-4  px-5">
      <div className="flex items-center">
        <ul className="flex justify-between gap-7 items-center">
          <li>
            <Link href={'/'} >
              <Image src="/Images/workafy-logo.svg" alt="logo" width={120} height={50} />
            </Link>
          </li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/dashboard'} >Hire X</Link></li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/dashboard'} >Find Work</Link></li>
          <li className="hidden lg:block font-15 hover:text-customGreen hover:cursor-pointer"><Link href={'/'} >Why.....Afy?</Link></li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between gap-6 items-center">
          <li className="hidden lg:block font-15  hover:text-customGreen hover:cursor-pointer">
            <IoSearchOutline />
          </li>

          {isAuth ? (
            <li ><UserButton afterSignOutUrl="/" /></li>
          ) : (
            <>
              <li className="hidden lg:block font-15  hover:text-customGreen hover:cursor-pointer"><a href="/sign-in">Log in</a></li>
              <li className="font-15  hover:text-customGreen hover:cursor-pointer"><a href="/sign-up">Join</a></li>
            </>
          )
          }

          <li className="lg:hidden  text-xl  hover:text-customGreen hover:cursor-pointer" onClick={toggleMenu}>
            <HiOutlineMenuAlt3 />
          </li>
          <li className='hidden lg:block'>
            <Link href={'/post-your-job'} >
              <Button buttonText="Assign Work" btnColor="customRed" />
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" >
          <div className="absolute top-0 left-0 bg-white w-[calc(80vw)] sm:w-96 h-screen" ref={menuRef} onClick={(e) => e.stopPropagation()}>
            <div className='text-center text-xl font-semibold bg-green-50 py-4 border-b border-gray-300'>Menu</div>
            <ul className="py-6">
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4 hover:bg-green-50 font-semibold" ><a href={'/'} >HOME  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4   hover:bg-green-50 font-semibold" ><a href={'/dashboard'} >HIRE X  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/dashboard'} >FIND WORK  </a></li>
              <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/'} >WHY.....AFY?  </a></li>
              {!isAuth ? (
                <>
                  <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/sign-up'} >SIGN UP?  </a></li>
                  <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold" ><a href={'/sign-in'} >LOG IN  </a></li>
                </>
              ) : (
                <li className="text-[13px] sm:text-[15px] hover:text-customGreen hover:cursor-pointer p-4  hover:bg-green-50 font-semibold"><a href={'/dashboard'}>PROFILE</a></li>
              )}

            </ul>
          </div>

        </div>
      )}


    </nav>
  );
};

export default Navbar;
