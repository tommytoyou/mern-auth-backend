const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
    type : String,
    required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    date: {
        type: DataCue,
        default: Data.now()
    }
})

const User = mongoose.model('User', userSchema);

model.exports = User;