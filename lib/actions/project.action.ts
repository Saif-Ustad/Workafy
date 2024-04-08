"use server";

import Project from "@/lib/models/project.model";
import { connect } from "@/lib/db";

export async function createProject(project: any) {
  try {
    await connect();
    const newProject = await Project.create(project);
    return JSON.parse(JSON.stringify(newProject));
  } catch (error) {
    console.log(error);
  }
}

export async function getProjects() {
  try {
    await connect();
    const projectsData = await Project.find();
    return JSON.parse(JSON.stringify(projectsData));
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectById(id:String) {
  try {
    await connect();
    const project = await Project.findById(id);
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.log(error);
    return null;
  }
}
