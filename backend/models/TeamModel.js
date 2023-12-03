import mongoose from "mongoose";

const Team = mongoose.Schema({
    team_name:{
        type: String,
        required: true
    },
    leader:{
        type: String,
        required: true
    },
    division:{
        type: String,
        required: true
    },
    prov:{
        type: String,
        required: true
    }
});

export default mongoose.model('Teams', Team);