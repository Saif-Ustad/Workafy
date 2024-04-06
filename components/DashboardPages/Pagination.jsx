"use client"

import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";

import React, { useEffect, useMemo, useState } from 'react';
import { Pagination } from '@mui/material';

import { CiCalendarDate } from "react-icons/ci";
import { PiNoteLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { LuBookmark } from "react-icons/lu";

import Link from 'next/link';


const PaginationComponent = ({ projects, itemsPerPage }) => {

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const searchParams = useSearchParams();

  

// Set initial currentPage to 1 (not using router.query)
  useEffect(() => {
    const page = searchParams.get("page");
    if (page && !isNaN(page)) {
      setCurrentPage(parseInt(page));
    }
  }, [router.query, searchParams]);
    


  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    router.push(`/browse-project?page=${value}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToShow = useMemo(() => projects.slice(startIndex, startIndex + itemsPerPage), [
    projects,
    startIndex,
    itemsPerPage,
  ]);

  return (
    <div>
      {projectsToShow.map((project, id) => (
        <div key={id} className="my-[25px] p-[25px] sm:p-[40px] border rounded-lg flex flex-col md:flex-row gap-[25px] md:gap-0 ">

          <div className='md:w-[68%] flex flex-col justify-center gap-[15px] md:pr-[25px] md:border-r border-gray-200'>

            <Link href={`/browse-project/${project.id}`} ><h1 className="text-[18px] text-headings md:text-[19px] font-medium  ">{project.title}</h1></Link>

            <div className='flex flex-wrap '>
              <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                <span className='text-[18px]'><CiCalendarDate /></span>
                <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.date}</p>
              </div>

              <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                <span className='text-[18px]'><PiNoteLight /></span>
                <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.category}</p>
              </div>

              <div className="flex items-center gap-[10px] px-[15px]">
                <span className='text-[18px]'><PiNoteLight /></span>
                <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.subCategory}</p>
              </div>
            </div>

            <p className='text-[13px] md:text-[15px]  text-headings leading-[1.75] text-justify'>{project.description}</p>

          </div>


          <div className='md:w-[32%] md:pl-[25px]'>
            <div className='flex flex-col gap-[5px] md:items-end mb-[15px]'>
              <h1 className="text-[16px] text-headings md:text-[17px] font-medium  ">Budget : {project.budget}</h1>
              <h2 className="text-[15px] text-headings md:text-[16px] font-medium  ">INR: {project.budgetINR}</h2>
              <div className='flex items-center gap-[6px]'>
                <span><CiLocationOn /></span>
                <h3 className='text-[13px] md:text-[14px]  text-headings'>{project.location}</h3>
              </div>
            </div>

            <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white mb-[10px]">Apply<span className="text-[20px]"><GoArrowUpRight /></span></div>
            <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white"><span className="text-[20px]"><LuBookmark /></span>Save for later</div>

          </div>

        </div>
      ))}

      <div className="mt-4 flex flex-col items-center gap-[15px]">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
         <div className='text-[12px] md:text-[14px]  text-headings'>{`${startIndex} - ${startIndex + projectsToShow.length} of ${projects.length}+ projects available`}</div>
      </div>
    </div>

  );
};

export default PaginationComponent;
