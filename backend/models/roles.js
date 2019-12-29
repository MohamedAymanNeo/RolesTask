const mongoose = require('mongoose');


const roleSchema = mongoose.Schema({
    name: { type: String, required: true},
    program: { type: String, required: true},
    subProgram: { type: String, required: true},
    pages: { type: String, required: true},
    permissions: [{ type: String, required: true}],
    date: {type: Date, default: new Date()},
    status: {type: String, default: 'NEW'},
    selected: {type: Boolean, default: false}
});


module.exports = mongoose.model("Role", roleSchema);
