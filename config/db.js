const mongoose = require("mongoose");

// Make connection to MongoDB
const connectToMongoDB = async() => {
    try {
        mongoose.connect("mongodb+srv://root:root@cluster0.h7soh.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log("Connected to MongoDB...");
    } catch (err) {
        console.error(err.message);
        // Terminate the application
        process.exit(1);
    }
};

module.exports = connectToMongoDB;