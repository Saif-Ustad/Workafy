import { Schema, model, models } from "mongoose";

const PdfSchema = new Schema({
    filename: String,
    contentType: String,
    data: Buffer
});


const my_proposal_Schema = new Schema({
    ProjectId: {
        type: String,
    },
    MessageToClient: {
        type: String,
    },
    BidAmount: {
        type: Number,
    },
    TimeToComplete: {
        type: String,
    },
    ProposalPdfs: [PdfSchema]
});



const BankDetailsSchema = new Schema({
    bankName: String,
    accountHolderName: String,
    accountNumber: String,
    IFSC: String,
    status: String,
    action: String
});



const TransactionSchema = new Schema({
    date: Date,
    description: String,
    amount: Number,
    refId: String
});


const PrivateProfileSchema = new Schema({

    FreelancerId: {
        type: String,
    },
    My_Proposals: {
        type: [my_proposal_Schema],
    },
    Membership: {
        type: String,
    },
    Contracts: {
        type: [my_proposal_Schema],
    },
    Invites: {
        type: [String],
    },
    Status: {
        type: String,
    },
    Terms: {
        type: String,
    },
    Bookmark_Projects: {
        type: [String],
    },
    Bookmark_Clients: {
        type: [String],
    },
    Bank_Details: {
        type: [BankDetailsSchema]
    },
    Refferal: {
        type: String,
    },
    Transactions: {
        type: [TransactionSchema]
    },
});

const PrivateProfile = models?.privateProfile || model("privateProfile", PrivateProfileSchema);

export default PrivateProfile;
