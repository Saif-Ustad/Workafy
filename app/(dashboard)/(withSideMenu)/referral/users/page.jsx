import Footer from '@/components/DashboardPages/Footer'
import { GoArrowUpRight } from "react-icons/go";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const page = () => {
  return (
    <>
    <div className=" w-full  bg-[#f4f4f4] p-[20px] sm:p-[30px] lg:p-[30px] xl:p-[40px]">
      
      <div>
        <h1 className="text-[25px] md:text-[30px] font-bold text-headings  mb-[20px]" >Refer a friend</h1>
        <p className='text-[13px] sm:text-[16px] text-customDarkGreen'>Maximize Your Impact: Share Workafy with Your Network and Earn Rewards with Every Successful Referral!</p>
      </div>

      <div className='mt-[40px] bg-white rounded-sm p-[15px] sm:p-[25px]'>
        <h4 className='font-medium text-customDarkGreen'>Referral Link</h4>
        <hr className='mt-[15px]'/>
        <div className='mt-[20px]  flex flex-col sm:flex-row gap-2 sm:gap-0 '>
          <div className='bg-gray-200 p-[10px] rounded-tl-md rounded-bl-md max-w-[700px] overflow-scroll scrollbar-none whitespace-nowrap'>https://workafy.com?utm_source=referral_257277&utm_medium=referral&utm_campaign=referral</div>
          <div className="py-[12px] bg-customDarkGreen  sm:w-[180px] rounded-[5px] text-white font-semibold text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Copy<span className="text-[20px]"><GoArrowUpRight /></span></div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[20px] mt-[40px]'>
        <div className='bg-white p-[25px] rounded-sm'>
          <h5 className='text-gray-500 text-[14px] mb-[10px]'>Step 1</h5>
          <h1 className='text-customDarkGreen text-[25px] sm:text-[35px] text-medium mb-[10px]'>Copy link</h1>
          <p className='text-[14px] text-customDarkGreen'>Send it to your friends and get any work done.</p>
        </div>

        <div className='bg-white p-[25px] rounded-sm'>
          <h5 className='text-gray-500 text-[14px] mb-[10px]'>Step 2</h5>
          <h1 className='text-customDarkGreen text-[25px] sm:text-[35px] text-medium mb-[10px]'>Share link</h1>
          <p className='text-[14px] text-customDarkGreen'>Share it more and earn rewards on each registeration.</p>
        </div>

        <div className='bg-white p-[25px] rounded-sm'>
          <h5 className='text-gray-500 text-[14px] mb-[10px]'>Step 3</h5>
          <h1 className='text-customDarkGreen text-[25px] sm:text-[35px] text-medium mb-[10px]'>Get coins</h1>
          <p className='text-[14px] text-customDarkGreen'>Coins enhances your chances of securing projects.</p>
        </div>
      </div>

      <ul className='mt-[50px] sm:mt-[120px] flex gap-[15px] text-center sm:gap-[25px] text-customDarkGreen  items-center justify-center text-[15px] sm:text-[18px]'>
        <li>Follow us & share </li>
        <li><FaFacebook /></li>
        <li><FaTwitter /></li>
        <li><FaInstagram /></li>
        <li><FaGooglePlusG /></li>
        <li><FaWhatsapp /></li>
        <li><FaLinkedinIn /></li>
      </ul>

    </div>
    <div className="ml-[20px]"><Footer /></div>
  
    </>
  )
}

export default page