const HomeModel = require('../models/HomeModel');

async function getAll() {
    try {
        return await HomeModel.find({});
    } catch (err) {
        throw err; 
    }
}

async function getByName(name) {
    try {
        return await HomeModel.findOne({"_id": name});
    } catch (err) {
        throw err;
    }
}

module.exports.getAll = getAll;
module.exports.getByName = getByName;