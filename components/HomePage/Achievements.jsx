
"use client"

import { GrDocumentUser } from "react-icons/gr";
import { TbDeviceImacStar } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2, // Change this threshold as needed
    });

    useEffect(() => {
        if (inView) {
            const myNum = document.querySelectorAll('.achievements-section .count');

            myNum.forEach((myCount) => {
                let target_count = myCount.dataset.count;
                let init_count = 0;

                let temp = target_count / 100;

                const updateNumber = () => {
                    if (init_count < target_count) {
                        init_count += temp;
                        myCount.innerText = Math.floor(init_count);

                        // Schedule next update
                        setTimeout(() => {
                            updateNumber();
                        }, 30);
                    }
                    else {
                        myCount.innerText = target_count;
                        return;
                    }


                }

                updateNumber(); // Start updating
            });
        }
    }, [inView]);


    return (
        <section className="achievements-section" ref={ref}>
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8  my-[100px] sm:my-[150px]" data-aos="fade-up">
                <div className="text-center mb-[100px]">
                    <h1 className="text-[25px] md:text-[35px] font-bold text-headings mb-[10px] sm:mb-[15px]">Workafy Achievements</h1>
                    <p className="text-[14px] md:text-[15px] text-headings  ">Showcasing the collective success of our vibrant network - where expertise meets innovation.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className=" flex flex-col items-center">
                        <div className="text-headings text-[35px] sm:text-[40px] mb-[15px]"><GrDocumentUser /></div>
                        <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2 " ><span className="count" data-count="250">0</span>K</h1>
                        <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85] ">Total Freelancer</p>
                    </div>

                    <div className=" flex flex-col items-center">
                        <div className="text-headings text-[35px] sm:text-[40px] mb-[15px]"><TbDeviceImacStar /></div>
                        <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2" ><span className="count" data-count="2">0</span>M</h1>
                        <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85] ">Projects Completed</p>
                    </div>

                    <div className=" flex flex-col items-center">
                        <div className="text-headings text-[50px] sm:text-[40px] mb-[15px]"><MdOutlineContactPage /></div>
                        <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2" ><span className="count" data-count="70">0</span>K+</h1>
                        <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85] ">Happy Clients</p>
                    </div>

                    <div className=" flex flex-col items-center">
                        <div className="text-headings text-[50px] sm:text-[40px] mb-[15px]"><HiOutlineRocketLaunch /></div>
                        <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2 "><span className="count" data-count="150">0</span>K+</h1>
                        <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85] ">LinkedIn Followers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
