import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from 'react';

import { useUser } from '@clerk/clerk-react';

import { paymentTermProfileEdit } from '@/lib/actions/publicProfile.action';

const PaymentTermEdit = ({ paymentTermEditOpen, setPaymentTermEditOpen, setTrigger }) => {

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
        setPaymentTermEditOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
       
        const updatedProfile = await paymentTermProfileEdit({freelancerId: userId, paymentTermData: formJson.Payment_Term});
        console.log(updatedProfile);

        setTrigger(true);
        handleClose();
    };

    return (
        <Dialog
            open={paymentTermEditOpen}
            onClose={() => setPaymentTermEditOpen(false)}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            {/* Form for editing */}
            <div className='sm:w-[500px] '>
                <div className='flex justify-between items-center p-[20px] border-b border-gray-300'>
                    <h3 className='text-headings font-medium text-[17px] sm:text-[20px]'>Add Payment Terms</h3>
                    <span className='cursor-pointer' onClick={() => setPaymentTermEditOpen(false)}><IoClose /></span>
                </div>
                <div className='flex flex-col gap-[15px]  p-[20px] sm:p-[30px] text-[16px]'>
                    <div className='border border-[#e9ecef] rounded-[5px] p-[2px]'><textarea type="text" name='Payment_Term' className='w-full h-[200px] p-[10px] rounded-[5px]' placeholder='Payment Terms' required/></div>
                    
                </div>

                <div className='flex justify-end p-[30px] pt-0 gap-[20px]'>
                    <button onClick={() => setPaymentTermEditOpen(false)} className='text-headings hover:text-[#00b43d]'>Close</button>
                    <button  className='py-[8px] px-[18px]  rounded-md bg-[#00b43d] hover:bg-customDarkGreen text-white font-medium'>Save</button>
                </div>
            </div>
        </Dialog>
    );
};

export default PaymentTermEdit;
