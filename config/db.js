const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://hrithikvasanthram:hrithik@cluster0.rrsug.mongodb.net/ca1").then(() => console.log("connected to database")).catch(err => console.error("mongo DB is not connected",err))

module.exports = mongoose;