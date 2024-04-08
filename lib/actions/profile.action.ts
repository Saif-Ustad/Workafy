"use server";

import Profile from "@/lib/models/profile.model";
import { connect } from "@/lib/db";


export async function createProfile(profileData: any) {
  try {
    await connect();
    const newProfile = await Profile.create(profileData);
  
    return JSON.parse(JSON.stringify(newProfile));
  } catch (error) {
    console.log(error);
  }
}