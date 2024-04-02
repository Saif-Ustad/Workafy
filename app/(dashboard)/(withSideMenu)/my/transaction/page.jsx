import Footer from '@/components/DashboardPages/Footer'
import React from 'react'

const page = () => {
  return (
    <>
      <div className=" w-full  bg-[#f4f4f4] p-[20px] lg:p-[30px] xl:p-[40px]">
        <h1 className="text-[25px] md:text-[30px] font-bold text-headings  mb-[50px]">Transactions</h1>
        <div className='mb-[100px] overflow-x-scroll scrollbar-none'>
          <table class="w-full border-collapse text-[13px] md:text-[15px]">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 bg-white font-semibold">S.No</th>
                <th class="border border-gray-400 px-4 py-2 bg-white font-semibold">Date</th>
                <th class="border border-gray-400 px-4 py-2 bg-white  font-semibold ">Description</th>
                <th class="border border-gray-400 px-4 py-2 bg-white  font-semibold ">Amount</th>
                <th class="border border-gray-400 px-4 py-2 bg-white  font-semibold ">	Ref Id	</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Your table data rows here --> */}

            </tbody>
          </table>
        </div>
      </div>
      <div className="ml-[20px]"><Footer /></div>

    </>
  )
}

export default page