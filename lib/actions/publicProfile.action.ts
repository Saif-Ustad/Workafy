"use server";

import publicProfile from "@/lib/models/publicProfile.model";
import { connect } from "@/lib/db";


export async function createPublicProfile(profileData: any) {
  try {
    await connect();
    const newProfile = await publicProfile.create(profileData);

    return JSON.parse(JSON.stringify(newProfile));
  } catch (error) {
    console.log(error);
  }
}




export async function fetchPublicProfile({freelancerId}:{ freelancerId: string}) {
  try {
    await connect();
    console.log(freelancerId)
    const profile = await publicProfile.findOne({ FreelancerId: freelancerId });
    
    if (!profile) {
      throw new Error('Profile not found');
    }

    return JSON.parse(JSON.stringify(profile));

  } catch (error) {
    console.log(error);
  }
}



export async function aboutProfileEdit({ freelancerId, aboutData }: { freelancerId: string, aboutData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      {
        $set:
        {
          Name: aboutData.Name,
          TagLine: aboutData.TagLine
        },
        $addToSet:
        {
          ExpertIn: { $each: aboutData.ExpertIn },
          Skills: { $each: aboutData.Skills }
        }

      },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}



export async function overviewProfileEdit({ freelancerId, overviewData }: { freelancerId: string, overviewData: string }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $set: { Overview: overviewData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}





export async function portfolioProfileEdit({ freelancerId, portfolioData }: { freelancerId: string, portfolioData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $addToSet: { Portfolio: portfolioData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}



export async function employementProfileEdit({ freelancerId, employmentData }: { freelancerId: string, employmentData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $addToSet: { Employement_History: employmentData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}



export async function certificationProfileEdit({ freelancerId, certificationData }: { freelancerId: string, certificationData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $addToSet: { Certifications: certificationData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}




export async function additionalProfileEdit({ freelancerId, additionalData }: { freelancerId: string, additionalData: string }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $set: { Additional_Information: additionalData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}




export async function availabilityProfileEdit({ freelancerId, availabilityData }: { freelancerId: string, availabilityData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $set: { Availability: availabilityData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}





export async function languageProfileEdit({ freelancerId, languageData }: { freelancerId: string, languageData: [string] }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $addToSet: { Language: { $each: languageData } } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}


export async function paymentTermProfileEdit({ freelancerId, paymentTermData }: { freelancerId: string, paymentTermData: string }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $set: { Payment_Term: paymentTermData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}




export async function qualificationProfileEdit({ freelancerId, qualificationData }: { freelancerId: string, qualificationData: any }) {
  try {
    await connect();
    const editedProfile = await publicProfile.findOneAndUpdate(
      { FreelancerId: freelancerId },
      { $addToSet: { Qualifications: qualificationData } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(editedProfile));

  } catch (error) {
    console.log(error);
  }
}
