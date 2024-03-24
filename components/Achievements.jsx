import { GrDocumentUser } from "react-icons/gr";
import { TbDeviceImacStar } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


const Achievements = () => {
  return (
   <section className="achievements-section">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8  my-[100px] sm:my-[150px]">
            <div className="text-center mb-[100px]">
                <h1 className="text-[25px] md:text-[35px] font-bold text-headings mb-[10px] sm:mb-[15px]">Workafy Achievements</h1>
                <p className="text-[14px] md:text-[15px] text-headings  ">Showcasing the collective success of our vibrant network - where expertise meets innovation.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className=" flex flex-col items-center">
                    <div className="text-headings text-[35px] sm:text-[40px] mb-[15px]"><GrDocumentUser /></div>
                    <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2">250K</h1>
                    <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85]">Total Freelancer</p>
                </div>

                <div className=" flex flex-col items-center">
                    <div className="text-headings text-[35px] sm:text-[40px] mb-[15px]"><TbDeviceImacStar /></div>
                    <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2">2M</h1>
                    <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85]">Projects Completed</p>
                </div>

                <div className=" flex flex-col items-center">
                     <div className="text-headings text-[50px] sm:text-[40px] mb-[15px]"><MdOutlineContactPage /></div>
                    <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2">70K+</h1>
                    <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85]">Happy Clients</p>
                </div>

                <div className=" flex flex-col items-center">
                     <div className="text-headings text-[50px] sm:text-[40px] mb-[15px]"><HiOutlineRocketLaunch /></div>
                    <h1 className="text-[28px] sm:text-[35px] text-headings font-bold mb-2">150K+</h1>
                    <p className="text-[14px] sm:text-[15px] text-headings  leading-[1.85]">LinkedIn Followers</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Achievements