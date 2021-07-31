const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
    {
        _id: String,
        works: [{
            date: { type: String },
            description: { type: String },
            link: { type: String },
            name: { type: String },
            role: { type: String }
        }]
    },
    {
        collection: "pn_portfolio_section"
    }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);