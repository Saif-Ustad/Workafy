import Footer from "@/components/DashboardPages/Footer"
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <>
    <div className=" w-full h-full  bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
      <h1 className="text-[25px] md:text-[30px] font-bold text-headings  max-w-[500px] mb-[20px]">Status</h1>
      <div className="bg-[#f1fcfa] h-[70vh] p-2 rounded-[20px] flex flex-col  justify-center items-center text-center gap-[30px]">
          <h3 className="text-[23px] md:text-[30px] font-bold text-headings  max-w-[500px]">Oops! No records found.</h3>

      </div>
    </div>
    <div className="ml-[20px]"><Footer /></div>
  
    </>
  )
}

export default page