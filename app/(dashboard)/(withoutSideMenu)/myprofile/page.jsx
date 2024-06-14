"use client"
import Image from "next/image"
import Footer from "@/components/DashboardPages/Footer"

import { FaEye } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaDivide, FaRegCalendarCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";

import { GoArrowUpRight } from "react-icons/go";
import { PiCalendar } from "react-icons/pi";

import { FaPencilAlt } from "react-icons/fa";

import { IoClose } from "react-icons/io5";



import { FaRegStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineGTranslate } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { useEffect, useState } from "react";


import AboutEdit from "@/components/DashboardPages/AboutEdit"
import OverviewEdit from "@/components/DashboardPages/OverviewEdit"
import PortfolioEdit from "@/components/DashboardPages/PortfolioEdit"
import EmploymentEdit from "@/components/DashboardPages/EmploymentEdit"
import CertificateEdit from "@/components/DashboardPages/CertificateEdit"
import AdditionalEdit from "@/components/DashboardPages/AdditionalEdit"
import AvailabilityEdit from "@/components/DashboardPages/AvailabilityEdit"
import LanguageEdit from "@/components/DashboardPages/LanguageEdit"
import PaymentTermEdit from "@/components/DashboardPages/PaymentTermEdit"
import QualificationEdit from "@/components/DashboardPages/QualificationEdit"


import { fetchPublicProfile } from '@/lib/actions/publicProfile.action';
import { singleLanguageDelete } from '@/lib/actions/publicProfile.action';

import { useUser } from '@clerk/clerk-react';

const Page = () => {

  const [profileAllData, setProfileAllData] = useState(null);

  const [trigger, setTrigger] = useState(false);
 
  const [isShareBtnClick, setIsShareBtnClick] = useState(false);

  const [aboutEditOpen, setAboutEditOpen] = useState(false);
  const [overviewEditOpen, setOverviewEditOpen] = useState(false);
  const [portfolioEditOpen, setPortfolioEditOpen] = useState(false);
  const [employmentEditOpen, setEmploymentEditOpen] = useState(false);
  const [certificateEditOpen, setCertificateEditOpen] = useState(false);
  const [additionalEditOpen, setAdditionalEditOpen] = useState(false);
  const [availabilityEditOpen, SetAvailabilityEditOpen] = useState(false);
  const [languageEditOpen, setLanguageEditOpen] = useState(false);
  const [paymentTermEditOpen, setPaymentTermEditOpen] = useState(false);
  const [qualificationEditOpen, setQualificationEditOpen] = useState(false);

  const { user } = useUser();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (user) {
      // Fetch the userId from user's metadata
      const { publicMetadata } = user;
      const { userId } = publicMetadata;
      setUserId(userId);
    }
  }, [user]);


  useEffect(() => {
    const fetchProfile = async () => {

      try {
        const profileData = await fetchPublicProfile({ freelancerId: userId })

        setTrigger(false);
        setProfileAllData(profileData);
      } catch (error) {
        console.log(error);
      }

    }

    if (userId) {
      fetchProfile();
    }
  }, [userId, trigger])

  // console.log(profileAllData);



  function copyText() {
    setIsShareBtnClick(true);
    const textToCopy = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
      alert("Profile Link Copied!")
    }).catch((error) => {
      console.error('Failed to copy text: ', error);
    });
  }




  return (
    <>
      <AboutEdit setTrigger={setTrigger} aboutEditOpen={aboutEditOpen} setAboutEditOpen={setAboutEditOpen} />
      <OverviewEdit setTrigger={setTrigger} overviewEditOpen={overviewEditOpen} setOverviewEditOpen={setOverviewEditOpen} />
      <PortfolioEdit setTrigger={setTrigger} portfolioEditOpen={portfolioEditOpen} setPortfolioEditOpen={setPortfolioEditOpen} />
      <EmploymentEdit setTrigger={setTrigger} employmentEditOpen={employmentEditOpen} setEmploymentEditOpen={setEmploymentEditOpen} />
      <CertificateEdit setTrigger={setTrigger} certificateEditOpen={certificateEditOpen} setCertificateEditOpen={setCertificateEditOpen} />
      <AdditionalEdit setTrigger={setTrigger} additionalEditOpen={additionalEditOpen} setAdditionalEditOpen={setAdditionalEditOpen} />
      <AvailabilityEdit setTrigger={setTrigger} availabilityEditOpen={availabilityEditOpen} SetAvailabilityEditOpen={SetAvailabilityEditOpen} />
      <LanguageEdit setTrigger={setTrigger} languageEditOpen={languageEditOpen} setLanguageEditOpen={setLanguageEditOpen} />
      <PaymentTermEdit setTrigger={setTrigger} paymentTermEditOpen={paymentTermEditOpen} setPaymentTermEditOpen={setPaymentTermEditOpen} />
      <QualificationEdit setTrigger={setTrigger} qualificationEditOpen={qualificationEditOpen} setQualificationEditOpen={setQualificationEditOpen} />


      <div className='myProfile-page bg-[#f1fcfa] h-[90vh] overflow-y-scroll'>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-[30px] flex flex-col lg:flex-row gap-[25px]'>

          <div className='lg:w-[70%] flex flex-col gap-[25px]'>

            <div className='flex  flex-col lg:flex-row gap-[30px] bg-white p-[25px] py-[50px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>

              <div className="lg:w-[25%] flex  gap-[20px] items-center">
                <div><Image src={"/Images/Avatar.png"} alt="avatar" width={150} height={150} /></div>
                <div className="bg-[#00b43d] rounded-md p-3 text-white"><FaCamera /></div>
              </div>

              <div className="lg:w-[75%]">
                <div className="flex justify-between">
                  <h1 className="text-[20px] text-headings md:text-[22px] font-bold  mb-[5px]">{profileAllData?.Name ? profileAllData.Name : "Name Not Found"}</h1>
                  <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setAboutEditOpen(true)} /></span>
                </div>
                <p className="text-[12px] sm:text-[15px] text-[#6b7177]  mb-[20px]">{profileAllData?.TagLine ? profileAllData.TagLine : "You must be having a tagline, right ?"}</p>
                <h3 className="text-[12px] sm:text-[15px] text-[#6b7177]  mb-[20px]"><span className="font-semibold">eXpert in : </span>{profileAllData?.ExpertIn.length !== 0 ? profileAllData?.ExpertIn.map((experties, id) => { return <span key={id} className="mr-[10px]">{experties}</span> }) : "Not Set"}</h3>

                <div className="flex flex-wrap gap-[15px] text-[12px] sm:text-[15px] text-[#6b7177] " >

                  <div className="flex gap-[10px] items-center">
                    <span className="text-[20px]"><FaEye /></span>
                    <h4>50 minutes Ago </h4>
                  </div>

                  <div className="flex gap-[10px] items-center">
                    <span className="text-[20px]"><MdLocationOn /></span>
                    <h4>Maharashtra , INDIA</h4>
                  </div>

                  <div className="flex gap-[10px] items-center">
                    <span className="text-[20px]"><FaRegCalendarCheck /></span>
                    <h4>Member since Feb 21, 2024</h4>
                  </div>
                </div>

              </div>
            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Overview</h1>
                <span onClick={() => setOverviewEditOpen(true)} className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit /></span>
              </div>
              <p className="text-[14px] text-body-text">
                {profileAllData?.Overview}
              </p>
            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Portfolio</h1>
                <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setPortfolioEditOpen(true)} /></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]">
                {profileAllData?.Portfolio?.map((project, id) => (
                  <div key={id} className='flex flex-col items-center gap-[10px] rounded-[15px] bg-[#f1fcfa] p-[20px] text-headings text-[15px]'>
                    <h2><span className="font-medium">Project Name : </span>{project.ProjectName}</h2>
                    <div className='w-[180px] h-[200px] bg-white  flex justify-center items-center '>
                      <span className='flex items-center text-[18px]'>1000 <IoClose /> 1000</span>
                    </div>
                    <h3 className="break-all"><span className="font-medium">Project Url : </span>{project.ProjectUrl}</h3>
                    <p><span className="font-medium">Description : </span>{project.Description}</p>
                  </div>
                ))}
              </div>


            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Qualification</h1>
                <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setQualificationEditOpen(true)} /></span>
              </div>

              <div class="overflow-x-auto mt-4">
                <table class="w-full border-collapse text-[13px] md:text-[15px]">
                  <thead>
                    <tr>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa] font-semibold">Qualification</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Marks / Grade</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Year of Starting</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Year of Passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- Your table data rows here --> */}
                    {profileAllData?.Qualifications?.map((qualification, id) => (
                      <tr key={id}>
                        <td class="border border-gray-400 px-4 py-2 ]">{qualification.Qualification}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{qualification.Marks}</td>
                        <td className="border border-gray-400 px-4 py-2">{qualification.Start_Year}</td>
                        <td className="border border-gray-400 px-4 py-2">{qualification.End_Year}</td>
                      </tr>
                    ))

                    }

                  </tbody>
                </table>
              </div>
            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Employment History</h1>
                <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setEmploymentEditOpen(true)} /></span>
              </div>

              <div class="overflow-x-auto mt-4">
                <table class="w-full border-collapse text-[13px] md:text-[15px]">
                  <thead>
                    <tr>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa] font-semibold">Organisation</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Designation</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Joining Data</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Relieving Data</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Currently Working</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Achievements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileAllData?.Employement_History?.map((employement, id) => (
                      <tr key={id}>
                        <td class="border border-gray-400 px-4 py-2 ]">{employement.Organisation}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{employement.Designation}</td>
                        <td className="border border-gray-400 px-4 py-2">{new Date(employement.JoiningDate).toLocaleDateString('en-GB')}</td>
                        <td className="border border-gray-400 px-4 py-2">{new Date(employement.RelievingDate).toLocaleDateString('en-GB')}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{employement.CurrentlyWorking}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{employement.Achievement}</td>
                      </tr>
                    ))

                    }

                  </tbody>
                </table>
              </div>

            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Certifications</h1>
                <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setCertificateEditOpen(true)} /></span>
              </div>

              <div class="overflow-x-auto mt-4">
                <table class="w-full border-collapse text-[13px] md:text-[15px]">
                  <thead>
                    <tr>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa] font-semibold">Course Name</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Institute / University Name</th>
                      <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">	Module(s)</th>
                      {/* <th class="border border-gray-400 px-4 py-2 bg-[#f1fcfa]  font-semibold ">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {profileAllData?.Certifications?.map((certificate, id) => (
                      <tr key={id}>
                        <td class="border border-gray-400 px-4 py-2 ]">{certificate.CourseName}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{certificate.Institute}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">{certificate.Modules}</td>
                        <td class="border border-gray-400 px-4 py-2 ]  ">Done</td>
                      </tr>
                    ))

                    }

                  </tbody>
                </table>
              </div>
            </div>


            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[5px]">Additional Information</h1>
                <span className="text-[22px] bg-[#ffede8]  rounded-full p-2 cursor-pointer"><CiEdit onClick={() => setAdditionalEditOpen(true)} /></span>
              </div>
              <p className="text-[14px] text-body-text">
                {profileAllData?.Additional_Information}
              </p>
            </div>

          </div>

          <div className='lg:w-[30%] flex flex-col gap-[25px]'>
            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div>
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Share Profile Link :</h1>

                <hr className="mb-[15px]" />

                <div id="textToCopy" className="bg-[#f1fcfa] p-2 rounded-md overflow-scroll scrollbar-none mb-[15px]">{`https://workafy.vercel.app/${userId}`}</div>

                <div onClick={copyText} className={`flex gap-[8px] justify-center items-center ${isShareBtnClick ? "bg-customDarkGreen": "bg-customGreen" } cursor-pointer py-4 rounded-md text-white mb-[25px]`}>
                  <span className="text-[16px] font-semibold ">Copy & Share</span>
                  <span className="text-[20px]"><GoArrowUpRight /></span>
                </div>

                <div className="flex justify-between items-center text-headings mb-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px]"><MdLocationOn /></span>
                    <span className="text-[14px]  xl:text-[16px]">Location</span>
                  </div>
                  <h2 className="font-medium text-[14px] xl:text-[16px]">Mahrashtra, INDIA</h2>
                </div>
                <hr className="mb-[20px]" />

                <div className="flex justify-between items-center text-headings mb-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]"><PiCalendar /></span>
                    <span className="text-[14px]  xl:text-[16px]">Member Since</span>
                  </div>
                  <h2 className="font-medium text-[14px] xl:text-[16px]">February 21, 2024</h2>
                </div>
                <hr className="mb-[20px]" />

                <div className="flex justify-between items-center text-headings mb-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]"><FaRegCalendarCheck /> </span>
                    <span className="text-[14px]  xl:text-[16px]">Last Active</span>
                  </div>
                  <h2 className="font-medium text-[14px] xl:text-[16px]">11 seconds</h2>
                </div>
                <hr />
              </div>
            </div>
            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Profile Completion</h1>

              <hr className="mb-[20px]" />

              <div className="relative pt-1 mb-[30px]">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      40%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div
                    style={{ width: "40%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>

              <div className="text-headings text-[14px]  xl:text-[16px]" >
                <div className="flex gap-[10px] items-center mb-[5px]">
                  <h3>Please Add Profile Picture </h3>
                  <span><FaPencilAlt /></span>
                </div>
                <h3 className="mb-[15px]">15%</h3>

                <div className="flex gap-[10px] items-center mb-[5px]">
                  <h3>Please insert Profile overview </h3>
                  <span><FaPencilAlt /></span>
                </div>
                <h3 className="mb-[15px]">15%</h3>

                <div className="flex gap-[10px] items-center mb-[5px]">
                  <h3>Please insert your Tag line </h3>
                  <span><FaPencilAlt /></span>
                </div>
                <h3 >10%</h3>
              </div>

            </div>
            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Statistics</h1>
              <hr className="mb-[25px]" />

              <div>
                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><FaRegStar /></span>
                    <span>Project Rating</span>
                  </div>
                  <h2 className="font-medium">0.0 </h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><LuCrown /></span>
                    <span>Projects Completed</span>
                  </div>
                  <h2 className="font-medium">0</h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><LuCalendarDays /></span>
                    <span>Lifetime Earnings</span>
                  </div>
                  <h2 className="font-medium">$0.00</h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><TbPigMoney /></span>
                    <span>Total Earnings</span>
                  </div>
                  <h2 className="font-medium">$0.00</h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><MdOutlineGTranslate /></span>
                    <span>Total Clients</span>
                  </div>
                  <h2 className="font-medium">0</h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><RiNewspaperLine /></span>
                    <span>Feedbacks Received</span>
                  </div>
                  <h2 className="font-medium">0</h2>
                </div>
                <hr className="mb-[25px]" />

                <div className="flex justify-between items-center text-headings mb-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]  xl:text-[16px]"><FaRegCalendarCheck /></span>
                    <span>Feedbacks Given</span>
                  </div>
                  <h2 className="font-medium">0</h2>
                </div>


              </div>


            </div>
            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Availability</h1>
                <span className="text-[18px] cursor-pointer text-headings"><FaPencilAlt onClick={() => SetAvailabilityEditOpen(true)} /></span>
              </div>
              <hr className="mb-[25px]" />

              <div className="flex justify-between items-center text-headings mb-[15px]">
                <div className="flex items-center gap-2">
                  <span className="text-[20px]"><LuCalendarDays /></span>
                  <span>Per Week</span>
                </div>
                <h2 className="font-medium">{profileAllData?.Availability ? profileAllData.Availability.per_week : "0"} days</h2>
              </div>
              <hr className="mb-[25px]" />

              <div className="flex justify-between items-center text-headings mb-[15px]">
                <div className="flex items-center gap-2">
                  <span className="text-[20px]"><FaRegCalendarCheck /></span>
                  <span>Per Day</span>
                </div>
                <h2 className="font-medium">{profileAllData?.Availability ? profileAllData.Availability.per_day : "0"} hours</h2>
              </div>
              <hr className="mb-[25px]" />

            </div>




            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Language</h1>
                <span className="text-[18px] cursor-pointer text-headings"><FaPencilAlt onClick={() => setLanguageEditOpen(true)} /></span>
              </div>
              <hr className="mb-[25px]" />
              <div className="flex flex-col gap-[10px] text-headings">
                {profileAllData?.Language?.map((Lang, id) => (
                  <div
                    className=" "
                    key={id}
                  >
                    <span className=" flex items-center py-[5px] px-[12px] rounded-[15px]  gap-[10px]">
                      {Lang}
                      <span className="cursor-pointer" onClick={() => { singleLanguageDelete({ freelancerId: userId , languageToDelete: Lang}); setTrigger(true)}}><IoClose /></span>
                    </span>
                  </div>
                ))}
              </div>

            </div>




            <div className='bg-white p-[25px] pb-[40px] rounded-[12px] border border-[#e9e9e9] shadow-sm'>
              <div className="flex justify-between">
                <h1 className="text-[16px] text-headings md:text-[18px] font-medium  mb-[15px]">Payment Terms</h1>
                <span className="text-[18px] cursor-pointer text-headings"><FaPencilAlt onClick={() => setPaymentTermEditOpen(true)} /></span>
              </div>
              <hr className="mb-[25px]" />
              <p className="text-[14px] text-body-text">
                {profileAllData?.Payment_Term}
              </p>
            </div>
          </div>


        </div>
        <div className="ml-[20px]"><Footer /></div>
      </div>

    </>
  )
}

export default Page