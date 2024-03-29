"use client"

import SideMenuBar from "@/components/DashboardPages/SideMenuBar"
import MobileMenuBar from "@/components/DashboardPages/MobileMenuBar"
import { useEffect } from "react";


//globle context
import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';


const Layout = ({ children }: { children: React.ReactNode }) => {

    
  //to remove scrollbar to pages
  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
    
    return () => {
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const { isSideMenuOpen } = useContext(GlobalContext);


    return (
        <div className="flex flex-col lg:flex-row bg-[#f4f4f4] lg:bg-white">
            <div className={` hidden  ${isSideMenuOpen? "lg:block" : "hidden"}`}><SideMenuBar /></div>
            <div className="lg:hidden m-[20px]"><MobileMenuBar /></div>
            <div className="w-full lg:h-[90vh] lg:overflow-y-scroll " >
                 {children}
            </div>
        </div>

    )
}

export default Layout