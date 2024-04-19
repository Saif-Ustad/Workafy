import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { certificationProfileEdit } from '@/lib/actions/publicProfile.action'; 

const CertificateEdit = ({ certificateEditOpen, setCertificateEditOpen, setTrigger }) => {

    
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
        setCertificateEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        const updatedProfile = await certificationProfileEdit({freelancerId: userId, certificationData: formJson});
        console.log(updatedProfile);
        
        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={certificateEditOpen}
            onClose={() => setCertificateEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[15px] sm:text-[20px]'>Add Certifications</h3>
                    <span className='cursor-pointer' onClick={() => setCertificateEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[15px] p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='CourseName' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' placeholder='Certification' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Institute' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text"  placeholder='Institute / University Name' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='Modules' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' type="text"  placeholder='Technology' required/></div>

                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setCertificateEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default CertificateEdit;
