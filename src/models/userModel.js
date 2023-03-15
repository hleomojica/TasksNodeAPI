//create a mongo db schema for user with mongoose
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema ({
    name : {
        type: String,
        required: 'Enter a first name'
    },
    email : {
        type: String,
        required: 'Enter a email'
    },
    password : {
        type: String,
        required: 'Enter a password'
    },
    created_date : {
        type: Date,
        default:  Date.now
    }
});

