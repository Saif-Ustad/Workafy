import Dialog from '@mui/material/Dialog';

import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { languageProfileEdit } from '@/lib/actions/publicProfile.action';

const LanguageEdit = ({ languageEditOpen, setLanguageEditOpen, setTrigger }) => {

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
        setLanguageEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        formJson.Language = formJson.Language.split(',').map(language => language.trim());
       
        const updatedProfile = await languageProfileEdit({freelancerId: userId, languageData: formJson.Language});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={languageEditOpen}
            onClose={() => setLanguageEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[600px]'>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[15px] sm:text-[20px]'>Add Language</h3>
                    <span className='cursor-pointer' onClick={() => setLanguageEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[20px] p-[20px] sm:p-[30px] text-[16px]'>


                    <div>
                        <p className='text-[14px] text-body-text mb-[5px]'>Choose Language</p>
                        <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><input type="text" name='Language' className='bg-[#e9ecef] p-[10px] rounded-[5px] w-full' placeholder='Please add Language' /></div>
                    </div>


                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setLanguageEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default LanguageEdit;
