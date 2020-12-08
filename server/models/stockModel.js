const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://chandni:YYHPO0GRTtpREQPS@stocktrackerdashboard.5wesk.mongodb.net/stocktrackerdashboard?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Mongo DB!")
    } catch (error) {
        console.log("Connecting to Mongo DB ERROR: " + error)
    }
}

module.exports = connectDB;
