var mongoose = require('mongoose')
mongoose.connect('mongodb://172.31.95.196/untitledSchema')

var ReviewSchema = new mongoose.Schema({
    name:{type:String, required: [true, "Name cannot be empty."], minlength: [2, "Name must be at least 2 characters long."]},
    rating:{type: Number, required:[true, "Rating cannot be empty."], min:1, max:5},
    content:{type: String, required:[true, "Review Content cannot be empty."], minlength:[5, "Review Content must be at least 5 characters long."]}
}, {timestamps:true})


var MovieSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Movie name cannot be empty."], minlength: [2, "Movie name must be at least 2 characters long."]},
    reviews: [ReviewSchema]
}, {timestamps:true})

mongoose.model("Review", ReviewSchema)
mongoose.model("Movie", MovieSchema)
