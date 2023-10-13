import mongoose from "mongoose";

const connection = mongoose.connect('mongodb+srv://jyotivyas:sachin@cluster0.gbr080c.mongodb.net/?retryWrites=true&w=majority')

export default connection