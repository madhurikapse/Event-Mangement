import mongoose, { model, Schema } from "mongoose";

const ticketSchema = new Schema({
    ticket: { type:Number, required: true },
   
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;