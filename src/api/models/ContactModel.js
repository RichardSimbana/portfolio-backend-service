const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        _id: { type: String },
        phone: { type: String },
        email: { type: String },
        github: { type: String },
        linkedin: { type: String }
    },
    {
        collection: "pn_contact_section"
    }
);

module.exports = mongoose.model("Contact", contactSchema);
