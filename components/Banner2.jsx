import { GrWorkshop } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { FiUserCheck } from "react-icons/fi";

import style from "../style/Banner2.module.scss";
import Link from "next/link";
import Image from "next/image";

const Banner2 = () => {
    return (
        <section className="banner2-section relative" >
            <div className={`${style.greenShade}  relative`} >
                 {/* floating image right */}
                 <Image
                        src="/Images/Banner2-img.jpg"
                        alt="banner2-img"
                        className="hidden xl:block z-[-1] absolute top-[15%] right-0"
                        width={600}
                        height={600}
                    />
                    
                <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-[30px]  sm:py-[50px] xl:py-[220px] mt-[100px] sm:mt-[120px]" >
                   
                    <div className="mb-[50px]" data-aos="fade-right">
                        <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[10px] sm:mb-[15px]">Hire Experts For Any Work Online</h1>
                        <p className="text-[14px] md:text-[15px] text-headings  ">Most viewed and all-time top-selling services</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-[20px]"  data-aos="fade-right">
                        <Link href={"/dashboard"} className="lg:max-w-[340px] w-full shadow-md rounded-[12px]" >
                            <div className="bg-white p-[20px] sm:p-[35px] rounded-[12px]  hover:bg-[#ffede8] transition duration-500 ease-in-out">
                                <div className="text-headings text-[30px] sm:text-[35px] mb-[15px]"><GrWorkshop /></div>
                                <h3 className="text-[16px] sm:text-[18px] text-headings font-medium mb-2">Post a work</h3>
                                <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">It&apos;s free and easy to post a job.<br /> Simply fill in a title, description.</p>
                            </div>
                        </Link >

                        <Link href={"/dashboard"} className="lg:max-w-[340px] w-full shadow-md rounded-[12px]  ">
                            <div className="bg-white p-[20px] sm:p-[35px] rounded-[12px] hover:bg-[#ffede8] transition duration-500 ease-in-out">
                                <div className="text-headings text-[30px] sm:text-[35px] mb-[15px]"><GrUserExpert /></div>
                                <h3 className="text-[16px] sm:text-[18px] text-headings font-medium mb-2">Hire eXperts</h3>
                                <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">It&apos;s free and easy to post a job.<br />  Simply fill in a title, description.</p>
                            </div>
                        </Link>

                        <Link href={"/dashboard"} className="lg:max-w-[340px] w-full shadow-md rounded-[12px]  " >
                            <div className="bg-white p-[20px] sm:p-[35px] rounded-[12px] hover:bg-[#ffede8] transition duration-500 ease-in-out">
                                <div className="text-headings text-[30px] sm:text-[35px] mb-[15px]"><FiUserCheck /></div>
                                <h3 className="text-[16px] sm:text-[18px] text-headings font-medium mb-2">Consult Workafy</h3>
                                <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">It&apos;s free and easy to post a job.<br /> Simply fill in a title, description.</p>
                            </div>
                        </Link>
                    </div>

                    
                </div>


            </div>
        </section>
    )
}

export default Banner2