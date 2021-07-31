const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
    {
        _id: String,
        description: { type: String }
    },
    {
        collection: "pn_about_section"
    }
);

module.exports = mongoose.model("About", aboutSchema);