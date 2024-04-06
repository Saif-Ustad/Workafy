"use client"
import { GrLocation } from "react-icons/gr";
import { TbCalendarFilled } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoNewspaperOutline } from "react-icons/io5";

import { GoArrowUpRight } from "react-icons/go";
import { FaRegShareSquare } from "react-icons/fa";
import Image from "next/image";

import { MdCheck } from "react-icons/md";
import Link from "next/link";

const Page = () => {


    const generateNewInputFile = () => {
        const html = `
            <input type="file" class="text-headings text-[13px] sm:text-[14px] mb-[10px]" />
            <div class="flex items-center h-[45px]">
                <input type="text" class="border w-full h-full text-[15px] p-2 border-[#e9e9e9] rounded-[10px]" />
                <div class="w-[100px] h-full bg-[#00b43d] rounded-md text-white font-semibold flex justify-center items-center cursor-pointer">Browse</div>
            </div>
        `;
        document.getElementById('additionalFiles').insertAdjacentHTML('beforeend', html);
    };


    return (
        <div className="bg-[#f1fcfa] ">
            <div className="container  mx-auto p-[20px]">
                <div className="flex  sm:justify-end gap-[20px] mb-[20px]">
                    <div className="flex items-center gap-[10px] text-headings text-[14px] sm:text-[15px] font-medium ">
                        <span className="bg-white p-3 rounded-full border border-[#e9e9e9] shadow-sm text-[13px]"><FaRegShareSquare /></span>
                        <span>Share</span>
                    </div>
                    <div className="flex items-center gap-[10px] text-[#6b7177] text-[14px] sm:text-[15px] ">
                        <span><Image src={"/Images/coin.png"} alt="coin" width={30} height={30} /></span>
                        <span>10 coins left</span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[30px] xl:gap-[100px]">
                    <div className="lg:w-[70%] flex flex-col gap-[25px]">
                        <div className="bg-white p-[20px] sm:p-[35px] rounded-[15px] border border-[#e9e9e9] shadow-sm">
                            <h1 className="text-[24px] md:text-[32px] font-bold text-headings  max-w-[800px] mb-[20px]">Telegram/Discord Bot for Ticket Monitoring & Automation</h1>

                            <div className="flex gap-[20px] flex-wrap text-headings text-[14px] sm:text-[16px] font-medium">
                                <div className="flex items-center gap-[10px] ">
                                    <span className="text-[15px] sm:text-[17px]"><GrLocation /></span>
                                    <span>United States</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <span className="text-[17px]"><TbCalendarFilled /></span>
                                    <span>Posted on : 4 Apr 2024</span>
                                </div>
                            </div>

                            <hr className="my-[30px]" />

                            <div className="flex  flex-wrap justify-between text-headings text-[15px] sm:text-[17px] ">
                                <div className="sm:w-1/2 flex gap-[30px] items-center mb-[20px] sm:mb-0">
                                    <div className="relative">
                                        <span className="text-[30px] sm:text-[40px] "><TfiCommentAlt /></span>
                                        <span className="absolute opacity-[85%] right-[-20px] top-[10px] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#fbf7ed]"></span>
                                    </div>
                                    <div className="flex flex-col gap-[5px]">
                                        <span className="font-medium">IT, Web and Mobile</span>
                                        <span className="text-[15px] sm:text-[16px]">Skill Category</span>
                                    </div>
                                </div>

                                <div className="sm:w-1/2 flex gap-[30px] items-center">
                                    <div className="relative">
                                        <span className="text-[30px] sm:text-[40px] "><IoNewspaperOutline /></span>
                                        <span className="absolute opacity-[85%] right-[-20px] top-[10px] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#fbf7ed]"></span>
                                    </div>

                                    <div className="flex flex-col gap-[5px]">
                                        <span className="font-medium">Scripts & Utilities</span>
                                        <span className="text-[15px] sm:text-[16px]">Sub-Category</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-[20px] sm:p-[35px] rounded-[15px] border border-[#e9e9e9] shadow-sm flex flex-col items-center">
                            <h1 className="text-[22px] md:text-[28px] font-bold text-headings  mb-[15px]">Total Budget: $180</h1>
                            <h2 className="text-headings font-medium text-[16px] sm:text-[18px] mb-[10px]">INR : ₹15300</h2>
                            <div className="py-[11px] sm:py-[12px] bg-customDarkGreen  w-full rounded-[5px] text-white font-semibold text-[13px] sm:text-[15px]  hover:bg-customGreen cursor-pointer"><Link href={"#proposal_form"} className="flex gap-2 items-center justify-center"> Write a Proposal <span className="text-[20px]"><GoArrowUpRight /></span></Link></div>
                        </div>


                        <div className="bg-white p-[20px] sm:p-[35px] rounded-[15px] border border-[#e9e9e9] shadow-sm">
                            <h2 className="text-headings font-medium text-[18px] sm:text-[20px] mb-[10px]">Project Description</h2>
                            <p className="text-[13px] sm:text-[15px]">I am seeking a skilled developer capable of creating a Telegram/Discord bot specifically designed to monitor ticket availability on Webook.com . The bot&apos;s primary functions should include:<br /><br />

                                - Regularly monitoring the website for ticket availability (this should be both event-triggered and at regular intervals)<br />
                                - Providing prompt notifications and calls (important) regarding ticket availability<br />
                                - (if possible) Automating ticket holding/purchasing when designated tickets become available<br /><br />

                                The successful candidate should have previous experience in bot development, specifically with regard to ticket sales and availability. Familiarity with the Telegram API and Webook&apos;s system is a plus, but primarily, a thorough understanding of how to automate processes effectively and efficiently is a must.</p>
                        </div>


                        <div className="bg-white p-[20px] sm:p-[35px] rounded-[15px] border border-[#e9e9e9] shadow-sm">
                            <h1 className="text-headings font-medium text-[18px] sm:text-[20px] mb-[10px]">Skills Required</h1>
                        </div>


                        <div className="bg-white p-[20px] sm:p-[35px] rounded-[15px] border border-[#e9e9e9] shadow-sm">
                            <form id="proposal_form" className="flex flex-col gap-[10px]">
                                <h1 className="text-headings font-medium text-[18px] sm:text-[20px] ">Write Your Proposal</h1>
                                <label for="message" className="text-headings  font-medium text-[15px] sm:text-[16px]">Your Message to Client</label>
                                <textarea id="message" placeholder="Your Message to Client, it will generate sales write it accordingly." className="text-[12px] sm:text-[15px] border h-[170px] p-4 border-[#e9e9e9] rounded-[10px] mb-[15px]" />

                                <div className="flex  flex-col sm:flex-row gap-[25px] mb-[15px]">
                                    <div className="sm:w-1/2 flex flex-col gap-[10px]">
                                        <label for="bid_amount" className="text-headings  font-medium text-[14px] sm:text-[16px]">Bid Amount (in $USD)</label>
                                        <input id="bid_amount" placeholder="Bid Amount" type="text" className="border text-[12px] sm:text-[15px] p-2 border-[#e9e9e9] rounded-[10px]" />
                                    </div>

                                    <div className="sm:w-1/2 flex flex-col  sm:gap-[10px]">
                                        <label for="completion_time" className="text-headings  font-medium text-[14px] sm:text-[16px]">Time to complete the task</label>
                                        <div className="flex gap-[8px] sm:gap-[20px] ">
                                            <input id="completion_time" type="number" placeholder="Input Number" className="w-1/2 border text-[12px] sm:text-[15px] p-2 border-[#e9e9e9] rounded-[10px]" />
                                            <select className="w-1/2 border text-[12px] sm:text-[15px]  p-2 border-[#e9e9e9] rounded-[10px]">
                                                <option>Please Select</option>
                                                <option>Day(s)</option>
                                                <option>Week(s)</option>
                                                <option>Month(s)</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <label for="document" className="text-headings  font-medium text-[15px] sm:text-[16px]">Supportive Document</label>
                                <input id="document" type="file" className="text-headings   text-[13px] sm:text-[14px]" />

                                <div className="flex items-center h-[35px] sm:h-[45px]">
                                    <input type="text" className="border w-full h-full text-[15px]  p-2 border-[#e9e9e9] rounded-[10px]" />
                                    <div className="w-[100px] h-full bg-[#00b43d] text-[13px] sm:text-[15px] rounded-md text-white font-semibold flex justify-center items-center">Browse</div>
                                </div>

                                <div id="additionalFiles"></div>

                                <span className="text-headings  font-medium text-[14px] cursor-pointer " onClick={generateNewInputFile}><span className="text-[20px]"> + </span>Attach More files</span>

                                <div className="py-[10px] sm:py-[13px] bg-customDarkGreen  w-full rounded-[5px] text-white font-semibold text-[13px] sm:text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Submit <span className="text-[20px]"><GoArrowUpRight /></span></div>

                            </form>
                        </div>
                    </div>

                    <div className="lg:w-[30%]">
                        <div className='bg-white flex flex-col gap-[10px] items-center border border-gray-200 rounded-[15px] shadow-sm p-[20px]'>
                            <Image src={"/Images/badge.png"} alt='badge' className='mb-[10px]' width={100} height={100} />
                            <h2 className='text-[14px] sm:text-[16px] text-customDarkGreen font-medium'> Get projects 20X faster!</h2>
                            <div className="py-[13px] sm:py-[15px] bg-[#f1fcfa]  w-full rounded-full  font-semibold text-[13px] sm:text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white">Go Premium<span className="text-[20px]"><GoArrowUpRight /></span></div>

                            <hr className='w-full my-[10px]' />

                            <ul className='flex flex-col gap-[15px] sm:gap-[20px]'>
                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Top Listing in Client Searches</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Direct Recommendations</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Apply on 200 Projects/month</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Workafy Premium Badge</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Work in All Skill Categories</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Weekly Profile Reviews</span>
                                </li>

                                <li className='flex items-center gap-[14px]'>
                                    <span className='bg-[#5BBB7B26] rounded-full p-1 text-[12px] text-[#5bbb7b]'><MdCheck /></span>
                                    <span className='text-customDarkGreen text-[14px] sm:text-[16px]'>Workafy Priority Support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page