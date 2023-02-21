const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundraiserSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: [String],
        required: true,
    },
    create_date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Fundraiser', fundraiserSchema);