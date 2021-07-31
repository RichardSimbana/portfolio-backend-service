const ContactModel = require('../models/ContactModel');

async function getAll() {
    try {
        return await ContactModel.find({});
    } catch (err) {
        throw err; 
    }
}

async function getByName(name) {
    try {
        return await ContactModel.findOne({"_id": name});
    } catch (err) {
        throw err;
    }
}

module.exports.getAll = getAll;
module.exports.getByName = getByName;