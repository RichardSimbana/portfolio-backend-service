const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema(
    {
        _id: String,
        name: { type: String },
        title: { type: String }
    },
    {
        collection: "pn_home_section"
    }
);

module.exports = mongoose.model("Home", homeSchema);