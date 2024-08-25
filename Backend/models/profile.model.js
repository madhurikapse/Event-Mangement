import  { model,Schema } from "mongoose";

const profileSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    joinedDate: { type: Date, default: Date.now }
});

const  profile = model("profile",profileSchema)
export default profile
