"use server";

import Proposal from "@/lib/models/proposal.model";
import { connect } from "@/lib/db";



export async function addToProposals({ projectId,  proposalData }: { projectId: string, proposalData: any }) {
    try {
        await connect();

        // console.log(projectId)
        // console.log(proposalData)
        const updatedProposal = await Proposal.findOneAndUpdate(
            { projectId },
            { 
                $addToSet: { freelancers_proposal: proposalData },
                $set: { projectAssignTo: "" },
            },
            { new: true, upsert: true  }
        );
        // console.log(updatedProposal);
        return JSON.parse(JSON.stringify(updatedProposal));
    } catch (error) {
        console.log(error);
    }
}



export async function removeProposal({ projectId, proposalId }: { projectId: string, proposalId: string }) {
    try {
        await connect();

        const updatedProposal = await Proposal.findOneAndUpdate(
            { projectId },
            { $pull: { freelancers_proposal: { FreelancerProposalId: proposalId } } },
            { new: true, upsert: true  }
        );
        // console.log(updatedProposal);
        return JSON.parse(JSON.stringify(updatedProposal));
    } catch (error) {
        console.log(error);
    }
}