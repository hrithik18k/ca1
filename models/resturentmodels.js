const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:Number,
        required:true
    },
    itemsarr:[{type:mongoose.Schema.Types.Array,ref:"item"}]
});

module.exports = mongoose.model("Restaurant",restaurantSchema);

