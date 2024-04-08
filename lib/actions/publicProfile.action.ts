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