import { Schema, model, models } from "mongoose";

const EmploymentHistorySchema = new Schema({
    Organisation: {
        type: String,
    },
    Designation: {
        type: String,
    },
    JoiningDate: {
        type: Date,
    },
    RelievingDate: {
        type: Date,
    },
    CurrentlyWorking: {
        type: String,
        enum: ['No', 'Yes'],
    },
    Achievement: {
        type: String,
    },
});

const CertificationSchema = new Schema({
    CourseName: {
        type: String,
    },
    Institute: {
        type: String,
    },
    Modules: {
        type: String,
    },
    Action: {
        type: String,
    },
});

const ProjectSchema = new Schema({
    ProjectName: {
        type: String,
    },
    ProjectUrl: {
        type: String,
    },
    Image: {
        type: String,
    },
    Description: {
        type: String,
    },
});

const ProfileSchema = new Schema({

    freelancerId: {
        type: String,
    },
    Name: {
        type: String,
    },
    ExpertIn: {
        type: [String],
    },
    Location: {
        type: String,
    },
    Overview: {
        type: String,
    },
    Portfolio: {
        type: [ProjectSchema],
    },
    Employement_History: {
        type: [EmploymentHistorySchema],
    },
    Certifications: {
        type: [CertificationSchema],
    },
    Additional_Information: {
        type: String,
    },
    Statistics: {
        Project_Rating: Number,
        Projects_Completed: Number,
        Lifetime_Earnings: Number,
        Total_Earnings: Number,
        Total_Clients: Number,
        Feedbacks_Received: Number,
        Feedbacks_Given: Number
    },
    availability: {
        per_week: Number,
        per_day: Number,
    },
    Language: {
        type: [String],
    }
});

const Profile = models?.profile || model("profile", ProfileSchema);

export default Profile;
