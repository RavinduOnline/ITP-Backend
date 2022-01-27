const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    Cardname: {
        type: String,
        required: true,
        unique: true
    },
    Month: { type: Number, required: true },
    Year: { type: Number, required: true },
    Cvv: { type: Number, required: true },
    Cardnumber: { type: Number, required: true },
    Type: { type: String, required: true },

}, {
    timestamps: true,
});

const Payment = mongoose.model('Card', PaymentSchema);

module.exports = Payment;