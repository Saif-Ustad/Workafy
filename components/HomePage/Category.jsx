import { IoIosArrowRoundForward } from "react-icons/io";
import CategoryCard from "./CategoryCard";

import { FaMedal } from "react-icons/fa";


//icons
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TfiAnnouncement } from "react-icons/tfi";
import { LiaLanguageSolid } from "react-icons/lia";
import { CiMicrophoneOn } from "react-icons/ci";
import { PiVideoLight } from "react-icons/pi";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { PiHandCoinsLight } from "react-icons/pi";


const CategoryCardData = [
    {
        icon: <LiaLaptopCodeSolid />,
        skillsCount:"1632",
        category:"Development & IT",

    },
    {
        icon: <LiaPencilRulerSolid />,
        skillsCount:"1344",
        category:"Design & Creative",

    },
    {
        icon: <TfiAnnouncement />,
        skillsCount:"1090",
        category:"Digital Marketing",

    },
    {
        icon: <LiaLanguageSolid />,
        skillsCount:"978",
        category:"Writing & Translation",

    },
    {
        icon: <CiMicrophoneOn />,
        skillsCount:"256",
        category:"Music & Audio",

    },
    {
        icon: <PiVideoLight />,
        skillsCount:"342",
        category:"Video & Animation",

    },
    {
        icon: <LiaPencilRulerSolid />,
        skillsCount:"675",
        category:"Eng.  & Architecture",

    },
    {
        icon: <PiHandCoinsLight />,
        skillsCount:"486",
        category:"Finance & Accounting",

    },
]

const Category = () => {
    return (
        <section className="category-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  mt-[50px] md:mt-[120px]" >
                <div className="flex flex-col lg:flex-row  justify-between lg:items-end mb-6"  data-aos="fade-left">
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[10px] sm:mb-[15px]">Browse talent by category</h1>
                        <p className="text-[14px] md:text-[15px] text-headings  ">Get some Inspirations from 2450+ skills</p>
                    </div>
                    <div className="gap-3 mb-5 lg:mb-0 ">
                        <a href="/dashboard" className="flex items-center cursor-pointer">
                            <p className="text-[14px] md:text-[15px] font-bold text-headings">All Categories</p>
                            <span className="text-[22px] md:text-[25px]  text-headings"><IoIosArrowRoundForward /></span>
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-right">
                    {CategoryCardData.map((data, id) => (
                        <CategoryCard key={id} icon={data.icon} skillsCount={data.skillsCount} category={data.category}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category