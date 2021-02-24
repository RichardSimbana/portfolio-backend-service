const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        name: { type: String }
    },
    { 
        collection: "Profiles" 
    }
);

module.exports = mongoose.model("Profiles", profileSchema);
