const ProfileModel = require('../models/ProfileModel');

async function getAllProfiles() {
    try {
        return await ProfileModel.find({});
    } catch (err) {
        throw err;
    }
}

async function getProfileByName(name) {
    try {
        return await ProfileModel.find({"name": name});
    } catch (err) {
        throw err;
    }
}

module.exports.getAllProfiles = getAllProfiles;
module.exports.getProfileByName = getProfileByName;
