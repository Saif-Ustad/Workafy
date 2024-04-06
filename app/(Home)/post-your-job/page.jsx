import React from 'react'
import Image from 'next/image';

import { FaRegStar } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";


const page = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row xl:items-end gap-[60px] xl:gap-[20px] px-4 sm:px-6 lg:px-8  my-[80px] sm:my-[90px]'>
            <div className='xl:w-1/2 relative'>

                <Image className='w-full' src={"/Images/assign_work.png"} alt="photo" width={400} height={400} />
                <div className='absolute hidden sm:block shadow-md left-[-50px] top-[100px] bg-white px-[30px] py-[20px] rounded-md text-headings ' >
                    <div className='relative '>
                        <h1 className='text-[15px]  font-semibold'>4.9/5</h1>
                        <p className='text-[13px] '>Clients rate professionals</p>
                        <span className='absolute left-[-50px] top-[-40px] bg-customGreen p-[10px] rounded-full text-white text-[20px]'><FaRegStar /></span>
                    </div>
                </div>

                <div className='absolute hidden sm:block shadow-md right-[-50px] top-[50px] bg-white  px-[30px] py-[20px] rounded-md text-headings ' >
                    <div className='relative '>
                        <h1 className='text-[15px]  font-semibold'>2M+</h1>
                        <p className='text-[13px] '>Projects Completed</p>
                        <span className='absolute left-[-50px] top-[-40px] bg-customGreen p-[12px] rounded-full text-white text-[22px]'><TbNotes /></span>
                    </div>
                </div>

                <Image  className='absolute sm:left-[22%] bottom-[0px]  bounceY' src={"/Images/happy_client.png"} alt="photo" width={350} height={300} />

            </div>

            <div className='xl:w-1/2 xl:pl-[120px]'>
                <h1 className='text-headings text-[24px] sm:text-[30px] font-bold mb-[20px]'>Post & Assign Work to eXperts</h1>
                <p className='text-headings text-[13px] mb-[30px]'>Success starts here, work from anywhere or get your work done from anywhere.</p>
                <form  className='shadow-sm sm:shadow-md rounded-lg p-[10px] sm:py-[35px] sm:px-[50px] flex flex-col gap-[15px] text-headings'>
                    <input type='text' placeholder='Name your Project e.g., Design a Logo' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required/>
                    <select  className='border text-[12px] sm:text-[15px]  p-[15px] border-[#e9e9e9] rounded-[8px]' Required>
                        <option >Please Select Category</option>
                        <option>IT, Web and Mobile</option>
                        <option>Design & Multimedia</option>
                        <option>Writing & Translation</option>
                        <option>Admin Support </option>
                        <option>Engineering & Architecture</option>
                        <option>Marketing & Sales </option>
                        <option>Management and Finance</option>
                        <option>Legal</option>
                    </select>
                    <textarea placeholder='Describe your Work in detail with all the key information.' className='text-[12px] sm:text-[15px] border h-[100px] p-4 border-[#e9e9e9] rounded-[10px]' Required/>

                    <div className='flex '>
                        <select className='border text-[12px] sm:text-[15px]  p-[15px] border-[#e9e9e9] rounded-l-[8px]' Required>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                        <input type="number" placeholder='What is your Budget?' className='w-full  border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-r-[8px]' Required/>
                    </div>

                    <input type="email" placeholder='Email Address' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required/>

                    <button  type="submit" className="py-[15px] bg-headings  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-white cursor-pointer hover:bg-customGreen hover:text-white">Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default page