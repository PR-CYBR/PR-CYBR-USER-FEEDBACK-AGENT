const mongoose = require('mongoose');

const userExecutionSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    lastExecution: { type: Date, required: true }
});

module.exports = mongoose.model('UserExecution', userExecutionSchema);