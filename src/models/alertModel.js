// create schema for alert with mongoose
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AlertSchema = new Schema ({
    name : {
        type: String,
        required: 'Enter a first name'
    },
    priority : {
        type: Number,
        required: 'Enter the priority'
    },
    email : {
        type: String,
    },
    company : {
        type: String,
    },
    phone : {
        type: String,
    },
    created_date : {
        type: Date,

        default:  Date.now
    }
});

