import Footer from "@/components/DashboardPages/Footer"
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <>
    <div className=" w-full h-full  bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
      <h1 className="text-[25px] md:text-[30px] font-bold text-headings  max-w-[500px] mb-[20px]">Bookmarked Clients</h1>
      <div className="bg-[#f1fcfa] h-[70vh] p-2 rounded-[20px] flex flex-col  justify-center items-center text-center gap-[30px]">
          <h3 className="text-[23px] md:text-[30px] font-bold text-headings  max-w-[500px]">Oops! No records found.</h3>
          <p className="text-[13px] md:text-[15px] text-headings ">Find your favourite client now !</p>
          <div className="py-[10px] lg:py-[15px] bg-customDarkGreen  w-[160px] lg:w-[200px] rounded-full text-white font-semibold  text-[13px] lg:text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Browse Projects<span className="text-[18px] lg:text-[20px]"><GoArrowUpRight /></span></div>
      </div>
    </div>
    <div className="ml-[20px]"><Footer /></div>
  
    </>
  )
}

export default page