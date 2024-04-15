"use client"

import { addToContractProjects, fetchProposals, fetchSingleProposal } from '@/lib/actions/privateProile.action';
import { fetchAllProjectsProposals } from '@/lib/actions/proposal.action';
import React, { useEffect, useState } from 'react'

import { GoArrowUpRight } from "react-icons/go";


const Page = () => {


    const [allProposals, setAllProposals] = useState([]);

    const handleAssignProject = async ({ freelancerId, proposalId }) => {

        // console.log(freelancerId, proposalId)

        const singleProposal = await fetchSingleProposal({ freelancerId: freelancerId, proposalId: proposalId });
        const { _id, ...proposalWithoutId } = singleProposal;
        // console.log(proposalWithoutId)
        await addToContractProjects({ freelancerId: freelancerId, proposalData: proposalWithoutId });
    }

    useEffect(() => {
        const fetchAll = async () => {
            const allProjectsProposals = await fetchAllProjectsProposals();
            setAllProposals(allProjectsProposals);

        }

        fetchAll();
    }, [])

    console.log(allProposals);




    return (
        <div className='container mx-auto  px-4 sm:px-6 lg:px-8  my-[80px] sm:my-[90px]'>

            <div className="flex flex-col gap-[25px]">

                {allProposals.map((projectProposals, id) => (
                    <div key={id} className='bg-[#f1fcfa] p-[20px]'>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Project ID : {projectProposals.projectId}</h3>

                        <div className='flex flex-col gap-[50px] text-[16px] text-customDarkGreen'>

                            {projectProposals.freelancers_proposal.map((proposal, id) => (
                                <div key={id}>
                                    <h2 className='mb-[20px] ml-[20px]'><span className='font-semibold ' >Freelancer ID : </span>{proposal.FreelancerId}</h2>

                                    <div className='flex flex-col gap-[10px] ml-[20px]'>
                                        <h2><span className='font-semibold'>Message :</span > {proposal.MessageToClient}</h2>
                                        <h2><span className='font-semibold'>Bid Amount :</span> ${proposal.BidAmount}</h2>
                                        <h2><span className='font-semibold'>Time To Complete :</span> {proposal.TimeToComplete.number} {proposal.TimeToComplete.unit}</h2>
                                        <h2><span className='font-semibold'>Assigned Freelancer :</span > {projectProposals.projectAssignTo}</h2>
                                        <div
                                            onClick={projectProposals.projectAssignTo === "" ? () => handleAssignProject({ freelancerId: proposal.FreelancerId, proposalId: proposal.FreelancerProposalId }) : undefined}
                                            className={`py-[8px] lg:py-[12px] bg-customDarkGreen w-[160px] lg:w-[200px] rounded-sm text-white font-semibold text-[13px] lg:text-[15px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer ${projectProposals.projectAssignTo === "" ? "" : "opacity-50 cursor-not-allowed"}`}
                                        >
                                            Assign Project
                                            <span className="text-[18px] lg:text-[20px]"><GoArrowUpRight /></span>
                                        </div>

                    

                                    </div>


                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Page