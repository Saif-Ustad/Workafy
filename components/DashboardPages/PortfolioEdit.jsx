"use client"

import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { portfolioProfileEdit } from '@/lib/actions/publicProfile.action';
import Image from 'next/image';

const PortfolioEdit = ({ portfolioEditOpen, setPortfolioEditOpen, setTrigger }) => {

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
        setPortfolioEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        
        // Remove the file data from the formJson
        delete formJson.Image;

        // Only store the image name in the formJson
        if (formData.get('Image')) {
            const fileName = formData.get('Image').name;
            formJson.Image = fileName;
        }

        const updatedProfile = await portfolioProfileEdit({freelancerId: userId, portfolioData: formJson});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Dialog
            open={portfolioEditOpen}
            onClose={() => setPortfolioEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='max-w-[500px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[17px] sm:text-[20px]'>Portfolio</h3>
                    <span className='cursor-pointer' onClick={() => { setPortfolioEditOpen(false); setSelectedFile(null) }}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[15px]  p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='ProjectName' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' placeholder='Project Name' required/></div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input name='ProjectUrl' className='bg-[#e9ecef]  p-[10px] rounded-[5px] w-full' type="text" placeholder='Project URL' required /></div>
                    {/* <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input className=' p-[10px] rounded-[5px] w-full' type="file" placeholder='Please Add Skill' /></div> */}
                    <div>

                        {selectedFile ? (
                            <div className='w-[180px] h-[200px] mx-auto border border-gray'>
                                <Image src={selectedFile} alt="Selected" className="object-cover w-full h-full" />
                            </div>
                        ) : (
                            <div className='w-[180px] h-[200px] bg-gray-100 mx-auto flex justify-center items-center '>
                                <span className='flex items-center text-[18px]'>1000 <IoClose /> 1000</span>
                            </div>
                        )}


                    </div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'>
                        <input name='Image' onChange={handleFileInputChange} className=' p-[10px] rounded-[5px] w-full' type="file" required/>
                    </div>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><textarea type="text" name='Description' className='w-full h-[100px] p-[10px] rounded-[5px]' placeholder='Project Description' required/></div>

                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => { setPortfolioEditOpen(false); setSelectedFile(null) }} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default PortfolioEdit;
