"use client"

import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { aboutProfileEdit } from '@/lib/actions/publicProfile.action';
import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

const AboutEdit = ({ aboutEditOpen, setAboutEditOpen, setTrigger }) => {

    
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

    const handleClose = () => {
        setAboutEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        // Convert Skills and ExpertIn field to an array of strings
        formJson.Skills = formJson.Skills.split(',').map(skill => skill.trim());
        formJson.ExpertIn = formJson.ExpertIn.split(',').map(Expert => Expert.trim());

        const updatedProfile = await aboutProfileEdit({freelancerId: userId, aboutData: formJson});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={aboutEditOpen}
            onClose={() => setAboutEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[15px] sm:text-[20px]'>Update Your Basic Information</h3>
                    <span className='cursor-pointer' onClick={() => setAboutEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[15px] p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='Name'  className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' placeholder='Enter Your Name' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'>
                    <select name='ExpertIn' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full ' required>
                        <option>Expert in</option>
                        <option>It and web</option>
                        <option>Media</option>
                    </select>
                    </div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='TagLine' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text"  placeholder='Add Your Tag Line' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Skills' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text"  placeholder='Please Add Skill' required/></div>

                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setAboutEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default AboutEdit;
