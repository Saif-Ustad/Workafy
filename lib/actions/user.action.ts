"use server";

import User from "@/lib/models/user.model";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
  
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser(userId: string) {
  try {
    await connect();
    const UserProfile = await User.findById(userId);
  
    return JSON.parse(JSON.stringify(UserProfile));
  } catch (error) {
    console.log(error);
  }
}


