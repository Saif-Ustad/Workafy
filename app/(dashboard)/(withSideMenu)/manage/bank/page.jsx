import Footer from "@/components/DashboardPages/Footer"
import Image from "next/image";

import { GoArrowUpRight } from "react-icons/go";
import { RiHome3Line } from "react-icons/ri";

const page = () => {
  return (
    <>
      <div className=" w-full   bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
        <div className="mb-[30px] flex flex-col gap-[15px] sm:flex-row sm:justify-between sm:items-end">
          <div>
            <h1 className="text-[20px] sm:text-[30px] font-bold text-headings  max-w-[500px] mb-[10px]">Bank Details</h1>
            <p className="text-[13px] sm:text-[16px] text-customDarkGreen">For payments add bank details here !</p>
          </div>

          <div className="py-[10px] sm:py-[12px] bg-customDarkGreen  sm:w-[180px] rounded-[5px] text-white font-semibold text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">+ Add Bank <span className="text-[20px]"><GoArrowUpRight /></span></div>

        </div>

        <div className="bg-white h-full p-[15px] sm:p-[25px] rounded-[20px] flex flex-col xl:flex-row gap-[30px]  ">

          <div className="xl:w-[25%] sm:p-[25px] flex flex-col items-center sm:border border-[#e9e9e9] rounded-[15px]">
            
            <div className="flex flex-col items-center gap-[5px] w-full">
              <div><Image src={"/Images/Avatar.png"} alt="avatar" width={100} height={100} /></div>
              <h2 className="mb-[15px] font-medium text-customDarkGreen">Saif Ustad</h2>
              <div className="py-[15px] bg-[#f1fcfa]  w-full rounded-full  font-semibold text-[15px] flex gap-2 items-center justify-center text-customGreen cursor-pointer hover:bg-customGreen hover:text-white">Logout<span className="text-[20px]"><GoArrowUpRight /></span></div>
            </div>

            <hr  className="my-[15px] border-t-[1px] border-[#e9e9e9] w-full"/>

            <div className="w-full">

              <div className={`flex  gap-[15px] items-center font-medium text-customDarkGreen hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md text-[15px] py-4 px-5`}>
                <span className="text-[22px] "><RiHome3Line /></span>
                <h3 className="text-[14px] sm:text-[16px]">Info Settings</h3>
              </div>

              <div className={`flex  gap-[15px] items-center font-medium text-customDarkGreen hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md text-[15px] py-4 px-5`}>
                <span className="text-[22px] "><RiHome3Line /></span>
                <h3 className="text-[14px] sm:text-[16px]">Manage Bank</h3>
              </div>

              <div className={`flex  gap-[15px] items-center font-medium text-customDarkGreen hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md text-[15px] py-4 px-5`}>
                <span className="text-[22px] "><RiHome3Line /></span>
                <h3 className="text-[14px] sm:text-[16px]">Change Password</h3>
              </div>

              <div className={`flex  gap-[15px] items-center font-medium text-customDarkGreen hover:bg-black hover:text-white cursor-pointer transition-all duration-400 rounded-md text-[15px] py-4 px-5`}>
                <span className="text-[22px] "><RiHome3Line /></span>
                <h3 className="text-[14px] sm:text-[16px]">Mobile Verify</h3>
              </div>


            </div>

          </div>

          <div className="xl:w-[75%] overflow-x-scroll">
            <table class="w-full border-collapse text-[13px] md:text-[15px]">
              <thead>
                <tr>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa] font-semibold">#</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa] font-semibold">Bank Name</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Acc. Holder Name</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Account No.</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">IFSC	</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Status	</th>
                  <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Action	</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- Your table data rows here --> */}
                
              </tbody>
            </table>
          </div>


        </div>
      </div>
      <div className="ml-[20px]"><Footer /></div>

    </>
  )
}

export default page