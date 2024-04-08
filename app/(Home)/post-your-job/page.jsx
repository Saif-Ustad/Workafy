"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image';

import { FaRegStar } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { createProject } from '@/lib/actions/project.action';


const Page = () => {

    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });

    const [formData, setFormData] = useState({
        projectName: '',
        category: '',
        subCategory: '',
        skillRequired: '',
        description: '',
        currencyType: 'USD',
        location: '',
        budget: '',
        email: '',
        date: currentDate,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let { budget, currencyType, ...rest } = formData;
        let convertedBudget_USD = 0;
        let convertedBudget_INR = 0;

        if (currencyType === 'USD') {
            convertedBudget_USD = parseFloat(budget);
            convertedBudget_INR = convertedBudget_USD * 83.33; // Assuming 1 USD = 75 INR
        } else if (currencyType === 'INR') {
            convertedBudget_INR = parseFloat(budget);
            convertedBudget_USD = convertedBudget_INR / 83.33; // Assuming 1 USD = 75 INR
        }

        const projectData = {
            ...rest,
            budget_USD: convertedBudget_USD.toFixed(2),
            budget_INR: convertedBudget_INR.toFixed(2)
        };

        console.log(projectData);

        const newProject = await createProject(projectData);
        console.log(newProject);

        setLoading(false);
        formRef.current.reset();
    };



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

                <Image className='absolute sm:left-[22%] bottom-[0px]  bounceY' src={"/Images/happy_client.png"} alt="photo" width={350} height={300} />

            </div>

            <div className='xl:w-1/2 xl:pl-[120px] h-[600px] overflow-y-scroll'>
                <h1 className='text-headings text-[24px] sm:text-[30px] font-bold mb-[20px]'>Post & Assign Work to eXperts</h1>
                <p className='text-headings text-[13px] mb-[30px]'>Success starts here, work from anywhere or get your work done from anywhere.</p>
                <form ref={formRef} onSubmit={handleFormSubmit} className='shadow-sm sm:shadow-md rounded-lg p-[10px] sm:py-[35px] sm:px-[50px] flex flex-col gap-[15px] text-headings'>
                    <input onChange={handleChange} name='projectName' value={formData.projectName} type='text' placeholder='Name your Project e.g., Design a Logo' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required />
                    <select onChange={handleChange} name='category' value={formData.category} className='border text-[12px] sm:text-[15px]  p-[15px] border-[#e9e9e9] rounded-[8px]' Required>
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

                    <input onChange={handleChange} name='subCategory' value={formData.subCategory} type='text' placeholder='Write your subCategory. e.g. Logo Designing' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required />

                    <input onChange={handleChange} name='skillRequired' value={formData.skillRequired} type='text' placeholder='Write required skills. e.g., React, Web' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required />

                    <textarea onChange={handleChange} name='description' value={formData.description} placeholder='Describe your Work in detail with all the key information.' className='text-[12px] sm:text-[15px] border h-[100px] p-4 border-[#e9e9e9] rounded-[10px]' Required />

                    <div className='flex '>
                        <select onChange={handleChange} name='currencyType' value={formData.currencyType} className='border text-[12px] sm:text-[15px]  p-[15px] border-[#e9e9e9] rounded-l-[8px]' Required>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                        <input onChange={handleChange} name='budget' value={formData.budget} type="number" placeholder='What is your Budget?' className='w-full  border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-r-[8px]' Required />
                    </div>

                    <input onChange={handleChange} name='location' value={formData.location} type='text' placeholder='Project location' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required />

                    <input onChange={handleChange} name='email' value={formData.email} type="email" placeholder='Email Address' className='border text-[14px] sm:text-[15px] p-[15px] border-[#e9e9e9] rounded-[8px]' Required />

                    <button type="submit" className={`py-[15px] bg-headings w-full rounded-md font-semibold text-[15px] flex gap-2 items-center justify-center text-white cursor-pointer hover:bg-customGreen hover:text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                        {loading ? 'Submitting...' : 'Get Started'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page