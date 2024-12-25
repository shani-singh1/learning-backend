import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

export const User = mongoose.model("User", userSchema);