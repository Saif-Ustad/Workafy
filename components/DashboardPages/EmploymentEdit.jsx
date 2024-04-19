"use client"

import Dialog from '@mui/material/Dialog';

import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { employementProfileEdit } from '@/lib/actions/publicProfile.action'; 

const EmploymentEdit = ({ employmentEditOpen, setEmploymentEditOpen, setTrigger }) => {

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
        setEmploymentEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
      
        const updatedProfile = await employementProfileEdit({freelancerId: userId, employmentData: formJson});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={employmentEditOpen}
            onClose={() => setEmploymentEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='max-w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[17px] sm:text-[20px]'>Add Employment History</h3>
                    <span className='cursor-pointer' onClick={() => setEmploymentEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[20px]  p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='Organisation' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' placeholder='Organisation' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Designation' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' type="text" placeholder='Designation' required/></div>
                    <div className='flex flex-col sm:flex-row gap-[20px] sm:items-center'>

                        <label className='text-[14px] text-body-text'>Joining Date</label>
                        <div className='w-full border border-[#e9ecef] rounded-[5px] p-[2px]'>
                            <input name='JoiningDate' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' type="date" required />
                        </div>

                        <label className='text-[14px] text-body-text '>Releiving Date</label>
                        <div className=' w-full border border-[#e9ecef] rounded-[5px] p-[2px]'>
                            <input name='RelievingDate' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' type="date" required/>
                        </div>
                    </div>

                    <div className='flex gap-[50px] items-center my-[10px]'>
                        <p className='text-[14px] text-body-text'>I Currently Work Here</p>
                        <div className='flex gap-[20px] sm:gap-[80px]'> 
                            <label className='flex flex-col'>
                                <input  type='radio' name='CurrentlyWorking' value='yes' required/>
                                <span>Yes</span>
                            </label>
                            <label className='flex flex-col'>
                                <input type='radio' name='CurrentlyWorking' value='no' required/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><textarea type="text" name='Achievement' className='w-full h-[100px] p-[10px] rounded-[5px]' placeholder='Achievements' required/></div>

                </div>
      
                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setEmploymentEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default EmploymentEdit;
