const PortfolioModel = require('../models/PortfolioModel');

async function getAll() {
    try {
        return await PortfolioModel.find({});
    } catch (err) {
        throw err; 
    }
}

async function getByName(name) {
    try {
        return await PortfolioModel.findOne({"_id": name});
    } catch (err) {
        throw err;
    }
}

module.exports.getAll = getAll;
module.exports.getByName = getByName;