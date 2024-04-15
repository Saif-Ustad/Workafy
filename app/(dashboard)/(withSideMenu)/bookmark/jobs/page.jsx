"use client"

import Footer from "@/components/DashboardPages/Footer"
import { GoArrowUpRight } from "react-icons/go";

import Link from "next/link";


import { CiCalendarDate } from "react-icons/ci";
import { PiNoteLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { LuBookmark } from "react-icons/lu";

import { BsFillTagFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useUser } from '@clerk/clerk-react';

import { fetchBookmarks } from "@/lib/actions/privateProile.action"
import { getProjectById } from "@/lib/actions/project.action"
import { removeBookmarkProject } from "@/lib/actions/privateProile.action"






const Page = () => {

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


  const [trigger, setTrigger] = useState(false);


  const handleRemoveFromSaved = async (projectId) => {
    try {
      await removeBookmarkProject({ freelancerId: userId, projectId });
      console.log('Project removed from bookmarks!');
      setTrigger((prev) => !prev);

    } catch (error) {
      console.error('Failed to remove project from bookmarks:', error);
    }
  };


  const [bookmarkedProjects, setBookmarkedProjects] = useState([]);

  useEffect(() => {
    const fetchBookmarkedProjects = async () => {
      try {
        const bookmarkedProjectsId = await fetchBookmarks({ freelancerId: userId });

        const bookmarkedProjects = await Promise.all(
          bookmarkedProjectsId.map(async (projectId) => {
            return await getProjectById(projectId);
          })
        );

        setBookmarkedProjects(bookmarkedProjects);

      } catch (error) {
        console.error('Failed to fetch bookmarked projects:', error);
      }
    };

    if (userId) {
      fetchBookmarkedProjects();
    }
  }, [userId, trigger]);






  return (
    <>
      <div className=" w-full   bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
        <h1 className="text-[25px] md:text-[30px] font-bold text-headings  max-w-[500px] mb-[20px]">Bookmarked Projects</h1>
        {bookmarkedProjects.length === 0 ? (
          <div className="bg-[#f1fcfa] h-[70vh] p-2 rounded-[20px] flex flex-col  justify-center items-center text-center gap-[30px]">
            <h3 className="text-[23px] md:text-[30px] font-bold text-headings  max-w-[500px]">Oops! No records found.</h3>
            <p className="text-[13px] md:text-[15px] text-headings ">Find your favourite client now !</p>
            <Link href={"/browse-project"}><div className="py-[10px] lg:py-[15px] bg-customDarkGreen  w-[160px] lg:w-[200px] rounded-full text-white font-semibold  text-[13px] lg:text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Browse Projects<span className="text-[18px] lg:text-[20px]"><GoArrowUpRight /></span></div></Link> 
          </div>

        ) : (
          <div className="flex flex-col gap-[25px]">
            {bookmarkedProjects.map((project, id) => (

              <div key={id} className="bg-white my-[5px] p-[25px] sm:p-[40px] border rounded-lg flex flex-col md:flex-row gap-[25px] md:gap-0 ">

                <div className='md:w-[68%] flex flex-col justify-center gap-[15px] md:pr-[25px] md:border-r border-gray-200'>

                  <Link href={`/browse-project/${1}`} ><h1 className="text-[18px] text-headings md:text-[19px] font-semibold  ">{project.projectName}</h1></Link>

                  <div className='flex flex-wrap '>

                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                      <span className='text-[18px]'><CiLocationOn /></span>
                      <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.location}</p>
                    </div>

                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                      <span className='text-[18px]'><PiNoteLight /></span>
                      <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.category}</p>
                    </div>

                    <div className="flex items-center gap-[10px] px-[15px]">
                      <span className='text-[18px]'><PiNoteLight /></span>
                      <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.subCategory}</p>
                    </div>

                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                      <span className='text-[18px]'><CiCalendarDate /></span>
                      <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{project.date}</p>
                    </div>

                  </div>

                  <p className='text-[13px] md:text-[15px]  text-headings leading-[1.75] text-justify'>{project.description}</p>


                  <div className="flex flex-wrap gap-[20px] mt-[15px]">

                    <h1 className="px-4 py-2 bg-[#ffede8] rounded-full text-headings text-[14px] ">${project.budget_USD}</h1>
                    <div className="px-4 py-2 bg-[#ffede8] rounded-full flex items-center gap-[5px] text-headings text-[14px]">
                      <span><BsFillTagFill /></span>
                      <span>Fixed Price</span>
                    </div>
                  </div>


                </div>


                <div className='md:w-[32%] md:pl-[25px] my-auto'>

                  <div onClick={() => handleRemoveFromSaved(project._id)} className="py-[15px] bg-headings  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-white cursor-pointer hover:bg-customGreen hover:text-white">Remove Bookmark<span className="text-[20px]"><LuBookmark /></span></div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
      <div className="ml-[20px]"><Footer /></div>

    </>
  )
}

export default Page