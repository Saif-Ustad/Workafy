import { FaMedal } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

import style from "../style/Banner.module.scss"


const Banner = () => {
    return (
        <section id="Banner-section" className="relative">
        <div className="container  mx-auto px-4 py-[30px] sm:px-6 sm:py-[50px] lg:px-8 lg:py-[80px]  mt-[100px] sm:mt-[150px] flex flex-col items-center lg:justify-end lg:flex-row  gap-[20px] md:gap-[80px] ">
            <div className={style.greenShade}>
                <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[30px] md:mb-[50px] max-w-[500px]">A whole world of freelance talent at your fingertips</h1>
                <div className="max-w-[580px]">
                    <div className="flex gap-[10px] sm:gap-[20px] mb-3 sm:mb-5"> 
                        <span className="text-[30px] sm:text-[35px] text-headings"><FaMedal /></span>
                        <div>
                            <h2 className="text-[16px] sm:text-[18px] text-headings font-medium pb-1 sm:pb-2">Proof of quality</h2>
                            <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">Check any pro&apos;s work samples, client reviews, and identity <br />verification.</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] sm:gap-[20px] mb-3 sm:mb-5">
                        <span className="text-[30px] sm:text-[35px] text-headings"><RiMoneyPoundCircleFill /></span>
                        <div>
                            <h2 className="text-[16px] sm:text-[18px] text-headings font-medium pb-1 sm:pb-2">No cost until you hire</h2>
                            <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">Interview potential fits for your job, negotiate rates, and only pay <br/>for work you approve.</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] sm:gap-[20px] mb-3 sm:mb-5">  
                        <span className="text-[30px] sm:text-[35px] text-headings"><MdHealthAndSafety /></span>
                        <div>
                            <h2 className="text-[16px] sm:text-[18px] text-headings font-medium pb-1 sm:pb-2">Safe and secure</h2>
                            <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">Focus on your work knowing we help protect your data and privacy. We&apos;re here with 24/7 WhatsApp support if you need it.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative">
                <Image
                    src="/Images/Banner-img.jpg"
                    alt="banner img"
                    className="rounded-[10px] md:rounded-[20px]"
                    width={580}
                    height={580}
                /> 
                <div className="absolute left-[5px] top-[98%] -translate-y-[100%] md:left-[-80px] md:top-1/2 md:-translate-y-1/2  bg-headings p-[20px] sm:px-[30px] sm:py-[40px] rounded-[10px] md:rounded-[20px] text-white">
                    <div className="flex items-center gap-3 text-[14px] sm:text-[15px]  mb-[10px] md:mb-[20px]"> 
                        <span><FaCircleCheck /></span>
                        <h4>The best for every budget</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] sm:text-[15px]  mb-[10px] md:mb-[20px]"> 
                        <span><FaCircleCheck /></span>
                        <h4>Quality work done quickly</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] sm:text-[15px]  mb-[10px] md:mb-[20px]"> 
                        <span><FaCircleCheck /></span>
                        <h4>Protected payments, every time</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] sm:text-[15px] "> 
                        <span><FaCircleCheck /></span>
                        <h4>24/7 WhatsApp support</h4>
                    </div>
                </div>   
            </div>
        </div>
        </section>
    )
}

export default Banner