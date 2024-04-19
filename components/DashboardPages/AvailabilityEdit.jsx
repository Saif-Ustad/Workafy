import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { availabilityProfileEdit } from '@/lib/actions/publicProfile.action'; 

const AvailabilityEdit = ({ availabilityEditOpen, SetAvailabilityEditOpen, setTrigger }) => {

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
        SetAvailabilityEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        const updatedProfile = await availabilityProfileEdit({freelancerId: userId, availabilityData: formJson});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={availabilityEditOpen}
            onClose={() => SetAvailabilityEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[15px] sm:text-[20px]'>Update Availability</h3>
                    <span className='cursor-pointer' onClick={() => SetAvailabilityEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[20px] p-[20px] sm:p-[30px] text-[16px]'>


                    <div>
                        <p className='text-[14px] text-body-text mb-[5px]'>Please mentioned Available days/week</p>
                        <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='per_week' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' placeholder='Availability days in a week' required/></div>
                    </div>

                    <div>
                        <p className='text-[14px] text-body-text mb-[5px]'>Please mentioned Available hrs/Day</p>
                        <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='per_day' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text" placeholder='Availability hrs/Day' required/></div>
                    </div>



                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => SetAvailabilityEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default AvailabilityEdit;
