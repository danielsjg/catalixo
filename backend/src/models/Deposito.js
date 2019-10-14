const mongoose = require('mongoose');

const DepositoSchema = new mongoose.Schema({
    nome: String,
    tipos: Array,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Deposito', DepositoSchema);