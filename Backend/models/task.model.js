import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: [{ type: String, required: true }],
    date : { type: String, required: true } ,
    location:{ type: String, required: true},
});

const Task = model("Task", taskSchema);

export default Task;