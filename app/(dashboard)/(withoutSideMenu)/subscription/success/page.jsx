"use client"

import React, { useEffect, useState } from 'react'
import success from "../../../../../public/Images/success.png";
import Link from 'next/link';

import { useUser } from '@clerk/clerk-react';

import Image from 'next/image';
import { fetchUser } from '@/lib/actions/user.action';


const Success = () => {
    const { user } = useUser();
    const [userId, setUserId] = useState();
    const [sessionId, setSessionId] = useState();


    useEffect(() => {
        if (user) {
            // Fetch the userId from user's metadata
            const { publicMetadata } = user;
            const { userId } = publicMetadata;
            setUserId(userId);

            const profilefetch = async () => {
                try {
                    const userProfile = await fetchUser(userId);
                    setSessionId(userProfile.subscription.sessionId)
                }
                catch (error) {
                    console.log(error);
                }
            }
            profilefetch();
        }

    }, [user, userId, sessionId]);

    const handlePaymentSuccess = () => {
        fetch("/api/payment-success", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ sessionId: sessionId, customerId: userId })
        })
            .then(res => {
                if (res.ok) return res.json();
                return res.json().then(json => Promise.reject(json));
            })
            .then(data => {
                console.log(data.message);
                router.push("/")
            })
            .catch(e => {
                console.log(e.error);
            });
    }


    return (
        <div className='m-0 p-0'>
            <div className='w-full min-h-[80vh] flex flex-col justify-center items-center'>
                <div className='my-10 text-green-600 text-2xl mx-auto flex flex-col justify-center items-center'>
                    <Image src={success} alt="" width={220} height={220} />
                    <h3 className='text-4xl pt-20 lg:pt-0 font-bold text-center text-slate-700'>
                        Payment Successful
                    </h3>
                    <Link href={'/subscription'} >
                        <button onClick={() => handlePaymentSuccess()}
                            className='w-40 uppercase bg-[#009C96] text-white text-xl my-16 px-2 py-2 rounded'
                        >
                            Proceed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success