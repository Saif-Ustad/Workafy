
"use client"


import PaginationComponent from '@/components/DashboardPages/Pagination';
import Image from 'next/image';

import style from "@/style/DashboardPageStyles/Browse_projects.module.scss"



// const projects = ["saif", "kaif", "aman", "sahil", "anjum", "suhana", "misba", "simran"];
const itemsPerPage = 5;
import projectsDetails from "@/constants/ProjectDetails";


import { FaCaretDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaCaretUp } from "react-icons/fa";

import { GoArrowUpRight } from "react-icons/go";

import { MdCheck } from "react-icons/md";

import { useState } from 'react';

import { Button, Menu, MenuItem } from '@mui/material';






const Page = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isCategoryrOpen, setIsCategoryrOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);


  const budgetItems = ['$0-$100', '$100-$500', '$500-$5000', '$5000-$10000', '$10000 and above']

  const [selectedBudget, setSelectedBudget] = useState('');

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
  }



  const categoryItems = ['IT, Web and Mobile ', 'Design & Multimedia ', 'Writing & Translation', 'Admin Support', 'Engineering & Architecture', 'Marketing & Sales', 'Management and Finance', 'Legal']; // Example items

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };




  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    // <div>
    //   <h1>Projects</h1>
    //   <PaginationComponent projects={projects} itemsPerPage={itemsPerPage} />
    // </div>
    <div className='mx-[15px]'>

      <div className="relative rounded-[15px]  overflow-hidden bg-cover bg-center h-[300px] " style={{ backgroundImage: "url('/Images/Banner_background.jpg')" }}>
        <div className="h-full container  p-[20px] mx-auto flex flex-col justify-center">
          <h1 className="text-[25px] md:text-[30px] font-bold text-headings  mb-[15px]">Find Work</h1>
          <p className="text-[13px] md:text-[15px] text-headings ">Anything For You: Unlock your next opportunity, find work tailored to your skills and passion!</p>
          <div className='absolute hidden xl:block right-[100px] top-[20px]'><Image src={"/Images/banner_Curly_img.png"} alt='photo' width={400} height={400} className={style.bounceY} /></div>
        </div>
      </div>


    
      <div className='container   sm:p-[20px]  mx-auto flex flex-col xl:flex-row mt-[20px] gap-[20px] '>
        <div className='xl:w-[25%]   '>

            {/* //filter */}
          <div>
            <div className='flex justify-between cursor-pointer' onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <h3 className="text-[16px] text-headings md:text-[18px] font-medium ">Filter</h3>
              <span>{isFilterOpen ? <FaCaretUp /> : <FaCaretDown />} </span>
            </div>
            <div className={`transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden  mt-[20px] ${isFilterOpen ? 'max-h-[200px]' : ''} relative text-customDarkGreen mb-[20px]`}>
              <input placeholder='Keywords' className='w-full border border-gray-200   py-[7px] px-[20px] rounded-[8px]' />
              <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[18px] '><IoSearchOutline /></span>
            </div>
          </div>


          <hr className='mb-[20px]' />



          {/* //category */}
          <div>
            <div className='flex justify-between cursor-pointer' onClick={() => setIsCategoryrOpen(!isCategoryrOpen)}>
              <h3 className="text-[16px] text-headings md:text-[18px] font-medium ">Category</h3>
              <span>{isCategoryrOpen ? <FaCaretUp /> : <FaCaretDown />} </span>
            </div>
            <ul className={`transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden  mt-[20px] ${isCategoryrOpen ? 'max-h-[400px]' : ''}  text-customDarkGreen mb-[20px] flex flex-col gap-[15px]`}>
              {categoryItems.map((category, id) => (
                <li key={id} onClick={() => handleCategorySelect(category)} className='flex items-center gap-[10px]'>
                  <input type="checkbox" checked={selectedCategory === category} readOnly />
                  <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>{category}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className='mb-[20px] ' />



          {/* //budget */}
          <div>
            <div className='flex justify-between cursor-pointer' onClick={() => setIsBudgetOpen(!isBudgetOpen)}>
              <h3 className="text-[16px] text-headings md:text-[18px] font-medium  ">Budget</h3>
              <span>{isBudgetOpen ? <FaCaretUp /> : <FaCaretDown />} </span>
            </div>
            <ul className={`transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden mt-[20px] text-customDarkGreen mb-[20px] flex flex-col gap-[15px] ${isBudgetOpen ? 'max-h-[200px]' : ''}`}>

              {budgetItems.map((budget, id) => (
                <li key={id} onClick={() => handleBudgetSelect(budget)} className='flex items-center gap-[10px]'>
                  <input type="checkbox" checked={selectedBudget === budget} readOnly />
                  <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>{budget}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-[10px] items-center border border-gray-200 rounded-[15px] shadow-sm p-[20px]'>
            <Image src={"/Images/badge.png"} alt='badge' className='mb-[10px]' width={100} height={100} />
            <h2 className='text-[16px] text-customDarkGreen font-medium'> Get projects 20X faster!</h2>
            <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-full  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white">Go Premium<span className="text-[20px]"><GoArrowUpRight /></span></div>

            <hr className='w-full my-[10px]' />

            <ul className='flex flex-col gap-[20px]'>
              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Top Listing in Client Searches</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Direct Recommendations</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Apply on 200 Projects/month</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Workafy Premium Badge</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Work in All Skill Categories</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Weekly Profile Reviews</span>
              </li>

              <li className='flex items-center gap-[14px]'>
                <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                <span className='text-customDarkGreen text-[15px] sm:text-[16px]'>Workafy Priority Support</span>
              </li>
            </ul>
          </div>

        </div>


        <div className='xl:w-[75%]'>
          <div className='flex justify-between items-center mb-[20px]'>
            <h2 className='text-customDarkGreen text-[15px] sm:text-[16px] font-medium'>Available Projects : {projectsDetails.length}+</h2>
            
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="contained"
              >
                Sort by
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>New Arrival (Latest)</MenuItem>
              </Menu>
            </div>
            
          </div>

          <div>
            <PaginationComponent projects={projectsDetails} itemsPerPage={itemsPerPage} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Page;
