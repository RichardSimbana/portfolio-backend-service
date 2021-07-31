const cors = require('cors');
const express = require('express');
const ContactController = require('../controllers/ContactController');
const router = express.Router();

router.get('/api/contact/all', cors({origin: '*'}), async (req, res) => {
    try {
        const contacts = await ContactController.getAll();
        return res.status(201).json({contacts});
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/contact/:name', cors({origin: '*'}), async (req, res) => {
    try {
        const contact = await ContactController.getByName(req.params.name);
        return res.status(201).json({contact});
    } catch (err) {
        return res.status(400).send();
    }
});

module.exports = router;
