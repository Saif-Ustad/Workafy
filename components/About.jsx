import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Button from "./Button";

import style from "../style/About.module.scss";

const FreelancersData = [
    {
        img_link: "/Images/Freelancer-img-1.jpg",
        name: "Priya Gupta",
        category: "Design & Multimedia",
    },
    {
        img_link: "/Images/Freelancer-img-2.jpg",
        name: "Abhishek Kumar",
        category: "Management and Finance",
    },
    {
        img_link: "/Images/Freelancer-img-3.jpg",
        name: "Sandeep Sharma",
        category: "Admin Support",
    },
    {
        img_link: "/Images/Freelancer-img-4.jpg",
        name: "Heeba Ali",
        category: "Writing & Translation",
    },

]

const About = () => {
    return (
        <section className='about-section bg-[#ffede8]'>
            <div className='container relative mx-auto px-4 py-[30px] sm:px-6 sm:py-[50px] lg:px-8 lg:py-[80px]  mt-[100px] sm:mt-[150px] flex flex-col lg:flex-row justify-between md:gap-[50px] items-center lg:items-end' >
                <div className="relative  scale-[55%] sm:scale-[100%] ">
                    <div className="bg-white p-[40px] rounded-[5px] max-w-[350px]  shadow-md  scale-[80%] xl:scale-[100%] ">
                        <h3 className="text-[15px] md:text-[17px] text-headings font-medium mb-[20px]"><span className="text-customGreen">100K+</span> Verified Freelancers</h3>
                        <div className="flex flex-col gap-5">
                            {FreelancersData.map((data, id) => (
                                <div key={id} className="flex gap-[20px] ">
                                    <Image
                                        src={data.img_link}
                                        alt="Freelancer-img"
                                        className="rounded-full"
                                        width={45}
                                        height={45}
                                    />
                                    <div>
                                        <h4 className="text-[14px] md:text-[16px] text-headings font-medium">{data.name}</h4>
                                        <p className="text-[13px] md:text-[14px] text-body-text">{data.category}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="bg-white p-[35px] rounded-[5px] flex flex-col items-center gap-2 max-w-[350px]  shadow-md z-[3] ml-[240px] xl:ml-[280px] mt-[-220px]  scale-[80%] xl:scale-[100%]">
                        <Image
                            src="/Images/Freelancer-img-profile.jpg"
                            alt="Freelancer-img-profile"
                            className="rounded-full mb-[12px]"
                            width={80}
                            height={80}
                        />
                        <h4 className="text-[15px] md:text-[17px] text-headings font-medium">Shalini Rajendran</h4>
                        <p className="text-[13px] md:text-[14px] text-body-text">IT, Web and Mobile</p>
                        <div className="flex items-center gap-2 mb-[10px]">
                            <span className="text-[15px] md:text-[17px] text-yellow-400"><FaStar /></span>
                            <span className="text-[15px] md:text-[17px] text-headings font-medium">4.9</span>
                        </div>

                        <div className="flex justify-between gap-[20px] items-center mb-3">
                            <span className="bg-[#ffede8] px-4 py-3 rounded-[25px] text-[13px] md:text-[14px] text-headings font-medium">PHP</span>
                            <span className="bg-[#ffede8] px-4 py-3 rounded-[25px] text-[13px] md:text-[14px] text-headings font-medium">Wordpress</span>
                            <span className="bg-[#ffede8] px-4 py-3 rounded-[25px] text-[13px] md:text-[14px] text-headings font-medium">React</span>
                        </div>

                        <div className="flex flex-row justify-between gap-5 ">
                            <div className="flex flex-col items-center">
                                <h5 className="text-[13px] md:text-[14px] text-headings font-medium">Location</h5>
                                <span className="text-[12px] md:text-[13px] text-headings">Karnataka</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <h5 className="text-[13px] md:text-[14px] text-headings font-medium">Joined</h5>
                                <span className="text-[12px] md:text-[13px] text-headings">Feb 10 2018</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <h5 className="text-[13px] md:text-[14px] text-headings font-medium">Last Active</h5>
                                <span className="text-[12px] md:text-[13px] text-headings">Jan 30 2024</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=""> 
                    <h1 className="text-[25px] md:text-[30px] font-semibold text-headings mb-[10px] max-w-[500px]">Trusted By Thousands of Freelancers</h1>
                    <p className="text-[14px] md:text-[15px] text-headings max-w-[280px] leading-[1.75] mb-[30px] ">Get your work done from anywhere. Hire an eXpert today!</p>
                    <ul className="flex flex-col gap-[25px] mb-[40px]">
                        <li className="flex gap-4 items-center text-[14px] md:text-[16px] text-headings">
                            <span className="text-[22px]"><FaCircleCheck /></span>
                            <h4>Quality Verified eXperts</h4>
                        </li>
                        <li className="flex gap-4 items-center text-[14px] md:text-[16px] text-headings">
                            <span className="text-[22px]"><FaCircleCheck /></span>
                            <h4>More than 10 Years Experience</h4>
                        </li>
                        <li className="flex gap-4 items-center text-[14px] md:text-[16px] text-headings">
                            <span className="text-[22px]"><FaCircleCheck /></span>
                            <h4>Professionals from Leading Industries</h4>
                        </li>
                    </ul>

                    <div className="py-3 sm:py-4 bg-customDarkGreen max-w-[160px] sm:max-w-[200px] rounded-[5px] text-white font-semibold text-[15px] sm:text-[18px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">See More <span className="text-[20px]"><GoArrowUpRight /></span></div>
                </div>

                {/* floating images */}

                <>
                    <Image src="/Images/about-floating-1.png" alt="floating-img" width={100} height={100} className={`${style.spin_right} absolute left-[45%] top-[8%]`}  />
                    <Image src="/Images/about-floating-2.png" alt="floating-img" width={100} height={100} className={`${style.spin_right} hidden md:block absolute left-[42.5%] bottom-[7%]`} />
                    <Image src="/Images/about-floating-3.png" alt="floating-img" width={50} height={50} className={`${style.bounceX} hidden lg:block absolute left-[18%] bottom-[19%] opacity-[0.2] `}/>
                    <Image src="/Images/about-floating-4.png" alt="floating-img" width={10} height={50} className={`${style.bounceY} absolute left-[-3%] bottom-[20%] opacity-[0.2]`} />
                    <Image src="/Images/about-floating-5.png" alt="floating-img" width={50} height={50} className={`${style.bounceY} absolute left-[-3%] top-[8%]`} />
                </>
            </div>
        </section>
    )
}

export default About