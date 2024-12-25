import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required : true
    }
});

export const User = mongoose.model("Todo", todoSchema);