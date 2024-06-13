import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { qualificationProfileEdit } from '@/lib/actions/publicProfile.action'; 

const QualificationEdit = ({ qualificationEditOpen, setQualificationEditOpen, setTrigger }) => {

    
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
        setQualificationEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        const updatedProfile = await qualificationProfileEdit({freelancerId: userId, qualificationData: formJson});
        console.log(updatedProfile);
        
        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={qualificationEditOpen}
            onClose={() => setQualificationEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[15px] sm:text-[20px]'>Add Qualification</h3>
                    <span className='cursor-pointer' onClick={() => setQualificationEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[15px] p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='Qualification' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' placeholder='Qualification' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Marks' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text"  placeholder='Marks / Garde' required/></div>
                    <div className='flex flex-col sm:flex-row gap-[20px] sm:items-center'>
                        <div className='w-full border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Start_Year' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="number"  placeholder='Year of Starting' required/></div>
                        <div className='w-full border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='End_Year' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="number"  placeholder='Year of Passing' required/></div>
                    </div>
                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setQualificationEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default QualificationEdit;
