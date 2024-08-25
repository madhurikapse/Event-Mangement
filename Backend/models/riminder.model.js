import { model, Schema } from "mongoose";

const riminderSchema = new Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    reminderTime: { type: Date, required: true },
});

const Riminder = model("Task",riminderSchema);

export default Riminder;