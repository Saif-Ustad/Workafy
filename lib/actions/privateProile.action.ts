"use server";

import privateProfile from "@/lib/models/privateProfile.model";
import { connect } from "@/lib/db";


export async function createPrivateProfile(profileData: any) {
    try {
        await connect();
        const newProfile = await privateProfile.create(profileData);

        return JSON.parse(JSON.stringify(newProfile));
    } catch (error) {
        console.log(error);
    }
}


export async function fetchBookmarks({ freelancerId } : {freelancerId: String}) {
    try {
        await connect(); 
        const profile = await privateProfile.findOne({ FreelancerId: freelancerId }); // Find the profile by freelancerId
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
        const updatedProfile = await privateProfile.findOneAndUpdate(
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
        const updatedProfile = await privateProfile.findOneAndUpdate(
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