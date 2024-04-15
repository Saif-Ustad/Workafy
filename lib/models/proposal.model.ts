import { Schema, model, models } from "mongoose";

const PdfSchema = new Schema({
    filename: String,
    contentType: String,
    data: Buffer
});

const Freelancer_proposal_Schema = new Schema({
    FreelancerId: {
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

const ProposalSchema = new Schema({
  projectId: {
    type: String,
    required: true,
  },
  freelancers_proposal: {
    type: [Freelancer_proposal_Schema]
  }, 
  projectAssignTo: {
    type: String,
  }

});

const Proposal = models?.proposal || model("proposal", ProposalSchema);


export default Proposal;