"use client"

import React, { useEffect, useState } from 'react'


import { CiCalendarDate } from "react-icons/ci";
import { PiNoteLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { LuBookmark } from "react-icons/lu";

import { GoArrowUpRight } from "react-icons/go";

import { addToContractProjects, fetchProposals, fetchSingleProposal } from '@/lib/actions/privateProfile.action';
import { fetchAllProjectsProposals, assignProject } from '@/lib/actions/proposal.action';

import { getProjectById } from "@/lib/actions/project.action"

import Link from "next/link";

const Page = () => {


    const [allProposalsData, setAllProposalsData] = useState([]);

    const handleAssignProject = async ({ freelancerId, proposalId , projectId }) => {

      
        // console.log(freelancerId, proposalId)

        const singleProposal = await fetchSingleProposal({ freelancerId: freelancerId, proposalId: proposalId });
        const { _id, ...proposalWithoutId } = singleProposal;

        const temp = await assignProject({ projectId: projectId,  proposalAssignedData: {FreelancerId: freelancerId, ProposalId: proposalId} })
        console.log(proposalWithoutId)
        await addToContractProjects({ freelancerId: freelancerId, proposalData: proposalWithoutId });
    }

    useEffect(() => {
        const fetchAll = async () => {
            try {

                // const allProjectsProposals = await fetchAllProjectsProposals();
                // setAllProposalsData(allProjectsProposals);

                const allProjectsProposalsList = await fetchAllProjectsProposals();
                // console.log(allProjectsProposalsList);

                const Proposals = await Promise.all(
                    allProjectsProposalsList.map(async (proposal) => {
                        const project = await getProjectById(proposal.projectId);
                        return {
                            ...project,
                            ...proposal,
                        };
                    })
                );

                setAllProposalsData([...Proposals]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchAll();
    }, [])

    console.log(allProposalsData);




    return (
        <div className='container mx-auto  px-4 sm:px-6 lg:px-8  my-[80px] sm:my-[90px]'>

            <div className="flex flex-col gap-[50px] sm:gap-[100px]">

                {allProposalsData.map((projectProposals, id) => (
                    <div key={id} className='bg-[#f1fcfa] shadow-lg p-[20px]'>
                        <h3 className='text-[18px] sm:text-[20px] font-medium mb-[30px] bg-yellow-200 inline-block'>Project ID : {projectProposals.projectId}</h3>


                        <h2 className='text-[17px] sm:text-[20px] font-medium my-[20px] text-headings'>Project Details : </h2>

                        <div key={id} className="bg-white my-[5px] p-[25px] sm:p-[40px] border rounded-lg flex flex-col md:flex-row gap-[25px] md:gap-0 ">

                            <div className='md:w-[68%] flex flex-col justify-center gap-[15px] md:pr-[25px] md:border-r border-gray-200'>

                                <Link href={`/browse-project/${projectProposals.ProjectId}`} ><h1 className="text-[18px] text-headings md:text-[19px] font-semibold  ">{projectProposals.projectName}</h1></Link>

                                <div className='flex flex-wrap '>

                                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                                        <span className='text-[18px]'><CiLocationOn /></span>
                                        <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{projectProposals.location}</p>
                                    </div>

                                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                                        <span className='text-[18px]'><PiNoteLight /></span>
                                        <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{projectProposals.category}</p>
                                    </div>

                                    <div className="flex items-center gap-[10px] px-[15px]">
                                        <span className='text-[18px]'><PiNoteLight /></span>
                                        <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{projectProposals.subCategory}</p>
                                    </div>

                                    <div className="flex items-center gap-[10px] border-r border-gray-200 px-[15px]">
                                        <span className='text-[18px]'><CiCalendarDate /></span>
                                        <p className='text-[13px] md:text-[15px]  text-[#6b7177] '>{projectProposals.date}</p>
                                    </div>

                                </div>

                                <p className='text-[13px] md:text-[15px]  text-headings leading-[1.75] text-justify'><span className="font-medium">Description :</span> {projectProposals.description}</p>




                                <div className="flex flex-wrap gap-[20px] mt-[15px]">

                                    <h1 className="px-4 py-2 bg-[#ffede8] rounded-full text-headings text-[14px] ">Budget : ${projectProposals.budget_USD}</h1>
                                </div>


                            </div>


                            <div className='md:w-[32%] md:pl-[25px] my-auto'>

                                <div className="py-[15px] bg-headings  w-full rounded-md  font-semibold text-[15px] flex gap-2 items-center justify-center text-white cursor-pointer hover:bg-customGreen hover:text-white">Delete Project<span className="text-[20px]"></span></div>

                            </div>

                        </div>





                        <h2 className='text-[17px] sm:text-[20px] font-medium mt-[40px] my-[20px] text-headings'>All freelancers Bidding proposals : </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] text-[16px] text-customDarkGreen'>

                            {projectProposals.freelancers_proposal.map((proposal, id) => (
                                <div key={id} className='bg-white p-[20px] rounded-lg shadow-md'>
                                    <h2 className='text-[14px] sm:text-[16px] mb-[20px] ml-[20px]'><span className='font-semibold ' >Freelancer ID : </span>{proposal.FreelancerId}</h2>

                                    <div className='flex flex-col gap-[10px] ml-[20px] text-[14px] sm:text-[16px]'>
                                        <h2 className='break-all'><span className='font-semibold'>Profile URL :</span > <Link  href={`https://workafy.vercel.app/${proposal.FreelancerId}`} className='text-[#007bff]'>{`http://localhost:3000/${proposal.FreelancerId}`}</Link></h2>
                                        <h2><span className='font-semibold'>Message :</span > {proposal.MessageToClient}</h2>
                                        <h2><span className='font-semibold'>Bid Amount :</span> ${proposal.BidAmount}</h2>
                                        <h2><span className='font-semibold'>Time To Complete :</span> {proposal.TimeToComplete.number} {proposal.TimeToComplete.unit}</h2>
                                        {/* <h2><span className='font-semibold'>Assigned Freelancer :</span > {projectProposals.projectAssignTo}</h2> */}
                                        <div
                                            onClick={projectProposals?.projectAssignTo?.FreelancerId ? undefined : () => handleAssignProject({ freelancerId: proposal.FreelancerId, proposalId: proposal.FreelancerProposalId, projectId: projectProposals.projectId })}
                                            className={`py-[8px] lg:py-[12px] bg-customDarkGreen w-[160px] lg:w-[200px] rounded-sm text-white font-semibold text-[13px] lg:text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer ${projectProposals.projectAssignTo ? "opacity-50 cursor-not-allowed" : ""}`}
                                        >
                                            Assign Project
                                            <span className="text-[18px] lg:text-[20px]"><GoArrowUpRight /></span>
                                        </div>



                                    </div>


                                </div>
                            ))}

                        </div>

                        <h2 className='text-[16px] sm:text-[20px] font-medium mt-[40px] my-[20px] text-headings'>Project Assigned to : {projectProposals?.projectAssignTo?.FreelancerId ? projectProposals.projectAssignTo.FreelancerId : "Not Assigned Yet" } </h2>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Page