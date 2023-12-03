import mongoose from "mongoose";

const Player = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

export default mongoose.model('Players', Player);