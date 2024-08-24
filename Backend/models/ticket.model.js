import mongoose from "mongoose";

const ticketShema=new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },


})
const Ticket=model("Ticket",ticketShema)
export default Ticket
