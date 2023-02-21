const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    fundraiser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Fundraiser',
    },
    donate: {
        type: Number,
        required: true,
    },
    create_date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Donate', donateSchema);