var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    googleId:String,
    userId: String,
	username: String,
    // password: String,
    posted_reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseReview",
        }
    ]
});


module.exports = mongoose.model("User", userSchema);