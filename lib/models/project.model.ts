import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skillRequired: {
    type: String,
    required: true,
  },
  budget_USD: {
    type: String,
    required: true,
  },
  budget_INR: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  
});

const Project = models?.project || model("project", ProjectSchema);


export default Project;