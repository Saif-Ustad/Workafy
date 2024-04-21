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
import { IoBookmark } from "react-icons/io5";

import { addToBookmarkProjects } from "@/lib/actions/privateProile.action"
import { removeBookmarkProject } from "@/lib/actions/privateProile.action"
import { fetchBookmarks } from "@/lib/actions/privateProile.action"

import Link from 'next/link';

import { useUser } from '@clerk/clerk-react';


const PaginationComponent = ({ projects, itemsPerPage }) => {

  const router = useRouter();

  const { user } = useUser();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (user) {
      // Fetch the userId from user's metadata
      const { publicMetadata } = user;
      const { userId } = publicMetadata;
      setUserId(userId);
    }
  }, [user]);


  const [bookmarkedProjects, setBookmarkedProjects] = useState([]);
  

  useEffect(() => {
    const fetchBookmarkedProjects = async () => {
      try {
        const bookmarkedProjects = await fetchBookmarks({ freelancerId: userId });
        setBookmarkedProjects(bookmarkedProjects);
      } catch (error) {
        console.error('Failed to fetch bookmarked projects:', error);
      }
    };

    if (userId) {
      // console.log(userId);
      fetchBookmarkedProjects();
    }
  }, [userId]);

  const handleAddToBookmarks = async (projectId) => {
    try {
      await addToBookmarkProjects({ freelancerId: userId, projectId });
      console.log('Project added to bookmarks!');

      const response = await fetchBookmarks({ freelancerId: userId });
      setBookmarkedProjects(response);
    } catch (error) {
      console.error('Failed to add project to bookmarks:', error);
    }
  };

  const handleRemoveFromSaved = async (projectId) => {
    try {
      await removeBookmarkProject({ freelancerId: userId, projectId });
      console.log('Project removed from bookmarks!');

      const response = await fetchBookmarks({ freelancerId: userId });
      setBookmarkedProjects(response);
    } catch (error) {
      console.error('Failed to remove project from bookmarks:', error);
    }
  };






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

            <Link href={`/browse-project/${project._id}`} ><h1 className="text-[18px] text-headings md:text-[19px] font-medium  ">{project.projectName}</h1></Link>

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
              <h1 className="text-[16px] text-headings md:text-[17px] font-medium  ">Budget : ${project.budget_USD}</h1>
              <h2 className="text-[15px] text-headings md:text-[16px] font-medium  ">INR: ₹{project.budget_INR}</h2>
              <div className='flex items-center gap-[6px]'>
                <span><CiLocationOn /></span>
                <h3 className='text-[13px] md:text-[14px]  text-headings'>{project.location}</h3>
              </div>
            </div>

            <Link href={`/browse-project/${project._id}`} ><div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white mb-[10px]">Apply<span className="text-[20px]"><GoArrowUpRight /></span></div></Link>
            {/* <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white" onClick={() => handleAddToBookmarks(project._id)}><span className="text-[20px]"><LuBookmark /></span>Save for later</div> */}


            {/* Save for later button */}
            {bookmarkedProjects?.find((p) => p === project._id) ? (
              <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white" onClick={() => handleRemoveFromSaved(project._id)}>
                <span className="text-[20px]"><IoBookmark /></span>Saved
              </div>
            ) : (
              <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white" onClick={() => handleAddToBookmarks(project._id)}>
                <span className="text-[20px]"><LuBookmark /></span>Save for later
              </div>
            )}

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
