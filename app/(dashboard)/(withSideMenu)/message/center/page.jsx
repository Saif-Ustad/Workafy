import Footer from '@/components/DashboardPages/Footer'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {
  return (
    <>
      <div className=" w-full  bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
        <h1 className="text-[25px] md:text-[30px] font-bold text-headings  max-w-[500px] mb-[20px]">Message</h1>
        <p className="text-[13px] md:text-[15px] text-headings mb-[20px]">Share updates & stay connected with clients.</p>
        <div className="bg-white p-[20px] rounded-md  gap-[30px] flex flex-col md:flex-row">

          <div className='md:w-[30%] h-[300px] md:h-auto border-b-[1px] md:border-r-[1px] border-gray-200'>
            <div className="relative bg-gray-100 mr-[20px]">
              <div className='w-full pr-[20px]'><input className="bg-gray-100 w-full p-[15px]  ml-[25px] focus:outline-none focus:border-transparent" placeholder='Search' /></div>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2"><IoSearchOutline /></span>
            </div>
          </div>

          <div className='md:w-[70%] flex flex-col justify-end gap-[10px]'>
              <div className='h-[300px] bg-[#f1fcfa] p-[10px]'>
                <h3 className='text-center mt-[100px] text-[14px] text-customDarkGreen md:text-[16px]'>Connect with clients directly, start messaging here.</h3>
              </div>

              <input className='border border-gray-200 focus:outline-none  p-[20px] rounded-sm' placeholder='Type Message' />
              <input type='file'/>
              <div className="py-[10px] sm:py-[12px] bg-customDarkGreen   rounded-[5px] text-white font-semibold text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Send<span className="text-[20px]"><IoIosArrowRoundForward /></span></div>
          </div>

        </div>
      </div>
      <div className="ml-[20px]"><Footer /></div>

    </>
  )
}

export default page