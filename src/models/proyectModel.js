import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProyectSchema = new Schema ({
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

