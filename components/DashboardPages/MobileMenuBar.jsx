"use client"

import React, { useState } from 'react'

import { RiHome6Line } from "react-icons/ri";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { PiStarBold } from "react-icons/pi";
import { PiWechatLogo } from "react-icons/pi";
import { PiUserSquare } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiChatCenteredText } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { VscTerminalUbuntu } from "react-icons/vsc";
import { PiBookmarksSimple } from "react-icons/pi";
import { BsBookmarkCheck } from "react-icons/bs";
import { PiBank } from "react-icons/pi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { TbLogout2 } from "react-icons/tb";


import { IoMenu } from "react-icons/io5";

const MenuLinksData = [
    {
        Link: "Start",
        style: "font-normal text-[#6b7177 "
    },
    {
        icon: <RiHome6Line />,
        Link: "My Proposals",
        redirect: "",
    },
    {
        icon: <LiaSuitcaseSolid />,
        Link: "Browse Projects",
        redirect: ""
    },
    {
        icon: <PiStarBold />,
        Link: "Upgrade to Premium",
        redirect: ""
    },
    {
        icon: <PiWechatLogo />,
        Link: "Message",
        redirect: ""
    },
    {
        Link: "Manage",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },
    {
        icon: <PiUserSquare />,
        Link: "My Profile",
        redirect: ""
    },
    {
        icon: <IoNewspaperOutline />,
        Link: "Contracts",
        redirect: ""
    },
    {
        icon: <PiChatCenteredText />,
        Link: "Invites",
        redirect: ""
    },
    {
        icon: <PiNewspaperClipping />,
        Link: "Terms",
        redirect: ""
    },
    {
        icon: <VscTerminalUbuntu />,
        Link: "Status",
        redirect: ""
    },

    {
        Link: "Bookmark",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },

    {
        icon: <PiBookmarksSimple />,
        Link: "Bookmark Projects",
        redirect: ""
    },
    {
        icon: <BsBookmarkCheck />,
        Link: "Bookmark Clients",
        redirect: ""
    },

    {
        Link: "Account",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },

    {
        icon: <PiBank />,
        Link: "Bank Details",
        redirect: ""
    },
    {
        icon: <PiUserSquare />,
        Link: "Refferal",
        redirect: ""
    },
    {
        icon: <LiaMoneyCheckAltSolid />,
        Link: "Transaction",
        redirect: ""
    },
    {
        icon: <TbLogout2 />,
        Link: "Logout",
        redirect: ""
    },

]


const MobileMenuBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (

        <>
            <div className='text-[13px] lg:text-[15px] py-5 px-8  bg-white rounded-[5px] mb-[10px] flex items-center gap-[20px]' onClick={handleMenuToggle}>
                <span className=' text-[18px] lg:text-[22px]'><IoMenu /></span>
                <span>Browse Projects</span>
            </div>

            {isMenuOpen && (<div id='Mobile_Menu_Bar' className=" bg-white z-5 rounded-[10px] shadow-sm" >
                <div >
                    <ul className="py-3  lg:py-6 lg:px-3 flex flex-col  " >
                        {MenuLinksData.map((data, id) => (
                            <li key={id} className={`flex  gap-[15px] items-center font-medium text-customDarkGreen  ${data.style} ${data.icon ? 'hover:bg-black hover:text-white cursor-pointer rounded-md transition-all duration-400' : ''}  text-[13px] lg:text-[15px]   py-3  sm:py-4 px-5 `}><span className="text-[18px] lg:text-[22px] ">{data.icon} </span> {data.Link} </li>
                        ))}
                    </ul>
                </div>

            </div>
            )}
        </>

    )
}

export default MobileMenuBar