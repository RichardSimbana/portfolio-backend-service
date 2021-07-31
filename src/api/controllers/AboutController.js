const AboutModel = require('../models/AboutModel');

async function getAll() {
    try {
        return await AboutModel.find({});
    } catch (err) {
        throw err;
    }
}

async function getByName(name) {
    try {
        return await AboutModel.findOne({"_id": name});
    } catch (err) {
        throw err;
    }
}

module.exports.getAll = getAll;
module.exports.getByName = getByName;