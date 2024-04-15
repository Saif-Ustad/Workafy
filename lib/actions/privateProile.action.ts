"use server";

import PrivateProfile from "@/lib/models/privateProfile.model";
import { connect } from "@/lib/db";


export async function createPrivateProfile(profileData: any) {
    try {
        await connect();
        const newProfile = await PrivateProfile.create(profileData);

        return JSON.parse(JSON.stringify(newProfile));
    } catch (error) {
        console.log(error);
    }
}



//bookmarks projects

export async function fetchBookmarks({ freelancerId } : {freelancerId: String}) {
    try {
        await connect(); 
        const profile = await PrivateProfile.findOne({ FreelancerId: freelancerId }); // Find the profile by freelancerId
        if (!profile) {
            throw new Error('Profile not found');
        }

        return profile.Bookmark_Projects; 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}

export async function addToBookmarkProjects({ freelancerId, projectId }: { freelancerId: string, projectId: string }) {
    try {
        await connect();
        const updatedProfile = await PrivateProfile.findOneAndUpdate(
            { FreelancerId: freelancerId },
            { $addToSet: { Bookmark_Projects: projectId } },
            { new: true }
        );

        return JSON.parse(JSON.stringify(updatedProfile));
    } catch (error) {
        console.log(error);
    }
}


export async function removeBookmarkProject({ freelancerId, projectId }: { freelancerId: string, projectId: string }) {
    try {
        await connect(); 
        const updatedProfile = await PrivateProfile.findOneAndUpdate(
            { FreelancerId: freelancerId },
            { $pull: { Bookmark_Projects: projectId } },
            { new: true }
        );

        return JSON.parse(JSON.stringify(updatedProfile)); 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}








//proposals

export async function fetchProposals({ freelancerId } : {freelancerId: String}) {
    try {
        await connect(); 
        const profile = await PrivateProfile.findOne({ FreelancerId: freelancerId }); // Find the profile by freelancerId using PrivateProfile
        if (!profile) {
            throw new Error('Profile not found');
        }

        return JSON.parse(JSON.stringify(profile.My_Proposals));
    } catch (error) {
        console.log(error);
        throw error; 
    }
}



export async function addToMyProposals({ freelancerId, proposalData }: { freelancerId: string, proposalData: any }) {
    try {
        await connect();

        // console.log("helosos")
        const updatedProfile = await PrivateProfile.findOneAndUpdate(
            { FreelancerId: freelancerId },
            { $addToSet: { My_Proposals: proposalData } },
            { new: true }
        );
        // console.log(updatedProfile);
        return JSON.parse(JSON.stringify(updatedProfile));
    } catch (error) {
        console.log(error);
    }
}


export async function removeMyProposal({ freelancerId, proposalId }: { freelancerId: string, proposalId: string }) {
    try {
        await connect(); 
        const updatedProfile = await PrivateProfile.findOneAndUpdate(
            { FreelancerId: freelancerId },
            { $pull: { My_Proposals: { _id: proposalId } } },
            { new: true }
        );

        return JSON.parse(JSON.stringify(updatedProfile)); 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
