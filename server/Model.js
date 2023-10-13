import mongoose, { model } from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true
    }
    


})

const detail = mongoose.model("newList", schema)
export default detail;