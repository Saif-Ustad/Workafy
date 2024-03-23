"use client"
import styles from "../style/Hero.module.scss";


import Image from "next/image"

import { IoSearchOutline } from 'react-icons/io5';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


import Button from './Button';
import { useState } from "react";


const HeroData = [

    {link : '/Images/Hero-img-1.jpg', profile_name : "Tulika Sharma", profession: "AI Artist"},
    {link : '/Images/Hero-img-2.jpg', profile_name : "Yash Singh", profession: "Web Developer"},
    {link : '/Images/Hero-img-3.jpg', profile_name : "Nidhi Sharma", profession: "Business Development Manager"},
];



const Hero = () => {

    const [currentData, setCurrentData] = useState(0);

    const handleNextImage = () => {
        setCurrentData((prev) => (prev + 1) % HeroData.length);
    };

    const handlePrevImage = () => {
        setCurrentData((prev) => (prev - 1 + HeroData.length) % HeroData.length);
    };


    return (
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-[60px] items-center pt-[30px] md:pt-[60px] ">
            <div className="w-full lg:w-auto">
                <h1 className="font-prata text-[40px] md:text-[50px] font-semibold text-headings mb-7">Anything For You</h1>
                <p className="text-[14px] md:text-[15px] text-body-text mb-7">Find experts for your work | Get work and do it from anywhere!</p>
                <div className={`${styles.searchBar} flex flex-col md:flex-row gap-5 md:gap-0 justify-between py-5 px-6 border-black border rounded-md mb-7 `}>
                    <div className="flex justify-between items-center gap-4 max-w-[400px] w-full">
                        <IoSearchOutline className="text-[20px]  hover:text-customGreen hover:cursor-pointer" />
                        <input type="text" placeholder="Try 'Video Editor' or 'Build a Website'" className="border-none focus:outline-none placeholder-[#1f4b3e] w-full " style={{ fontSize: '15px' }} />
                    </div>
                    <Button buttonText="Search" btnColor="customDarkGreen" />
                </div>
                <p className="text-[14px] md:text-[15px] text-headings ">Popular Searches : AI Artist,  Video Editor,  Web Designer,  Build a Website,  Logo Design</p>
            </div>
            <div className="w-full lg:w-auto relative">
                <div className={`${styles.green_rectangle} w-full lg:w-auto mx-auto`}>
                    <Image
                        src={HeroData[currentData].link}
                        alt={`Image ${currentData + 1}`}
                        className="w-full lg:w-[540px] "
                        width={580}
                        height={580}
        
                    />
                    <div className="absolute top-[25px] left-[25px]">
                        <h3 className="text-white font-medium">{HeroData[currentData].profile_name}</h3>
                        <h2 className="text-white font-medium">{HeroData[currentData].profession}</h2>
                    </div>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                    <button onClick={handlePrevImage} className="bg-gray-300 p-2 rounded-full"><FaArrowLeft /></button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                    <button onClick={handleNextImage} className="bg-gray-300 p-2 rounded-full"><FaArrowRight /></button>
                </div>


            </div>

            {/* floating images */}
            <>
                <Image src="/Images/hero-floating-1.png" alt="floating-img" width={100} height={100} className={` ${styles.spin_right}  hidden lg:block absolute left-[-8%] top-[3%]`}/>
                <Image src="/Images/hero-floating-2.png" alt="floating-img" width={100} height={100} className={` ${styles.bounceY} hidden lg:block absolute left-[40%] top-[10%]`}/>
            </>

        </div>
    )
}

export default Hero