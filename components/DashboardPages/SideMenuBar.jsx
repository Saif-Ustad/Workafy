"use client"

import React from 'react'

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
import Link from 'next/link';


// //globle context
// import { useContext } from 'react';
// import { GlobalContext } from '../../GlobalContext';


const MenuLinksData = [
    {
        Link: "Start",
        style: "font-normal text-[#6b7177 "
    },
    {
        icon: <RiHome6Line />,
        Link: "My Proposals",
        redirect: "/dashboard",
    },
    {
        icon: <LiaSuitcaseSolid />,
        Link: "Browse Projects",
        redirect: "/browse-project"
    },
    {
        icon: <PiStarBold />,
        Link: "Upgrade to Premium",
        redirect: "/subscription"
    },
    {
        icon: <PiWechatLogo />,
        Link: "Message",
        redirect: "/message/center"
    },
    {
        Link: "Manage",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },
    {
        icon: <PiUserSquare />,
        Link: "My Profile",
        redirect: "/myprofile"
    },
    {
        icon: <IoNewspaperOutline />,
        Link: "Contracts",
        redirect: "/notifications/proposals"
    },
    {
        icon: <PiChatCenteredText />,
        Link: "Invites",
        redirect: "/notifications/invites"
    },
    {
        icon: <PiNewspaperClipping />,
        Link: "Terms",
        redirect: "/notifications/terms"
    },
    {
        icon: <VscTerminalUbuntu />,
        Link: "Status",
        redirect: "/notifications/status"
    },

    {
        Link: "Bookmark",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },

    {
        icon: <PiBookmarksSimple />,
        Link: "Bookmark Projects",
        redirect: "/bookmark/jobs"
    },
    {
        icon: <BsBookmarkCheck />,
        Link: "Bookmark Clients",
        redirect: "/bookmark/clients"
    },

    {
        Link: "Account",
        style: "font-normal text-[#6b7177] mt-[20px]"
    },

    {
        icon: <PiBank />,
        Link: "Bank Details",
        redirect: "/manage/bank"
    },
    {
        icon: <PiUserSquare />,
        Link: "Refferal",
        redirect: "/referral/users"
    },
    {
        icon: <LiaMoneyCheckAltSolid />,
        Link: "Transaction",
        redirect: "/my/transaction"
    },
    {
        icon: <TbLogout2 />,
        Link: "Logout",
        redirect: "/logout"
    },

]




const SideMenuBar = () => {

    // const { isSideMenuOpen } = useContext(GlobalContext);

    return (
        <div id='side_Menu_Bar' className={` relative  w-[290px] h-[90vh] bg-white z-5 scrollbar-thin scrollbar-thumb-[#e9e9e9] scrollbar-track-[#ffffff]  overflow-y-scroll `} >
            <div className="absolute top-0 left-0  w-full h-full">
                <ul className="py-6 px-3 flex flex-col gap-[0px] " >
                    {MenuLinksData.map((data, id) => (
                        data.redirect ? (
                            <Link href={data.redirect} key={id} ><li className={`flex  gap-[15px] items-center font-medium text-customDarkGreen  ${data.style} ${data.icon ? 'hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md' : ''} text-[15px] py-4 px-5`}><span className="text-[22px] ">{data.icon} </span> {data.Link} </li></Link>
                        ) : (
                            <li key={id} className={`flex  gap-[15px] items-center font-medium text-customDarkGreen  ${data.style} ${data.icon ? 'hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md' : ''} text-[15px] py-4 px-5`}><span className="text-[22px] ">{data.icon} </span> {data.Link} </li>
                        )

                    ))}
                </ul>
            </div>

        </div>
    )
}

export default SideMenuBar