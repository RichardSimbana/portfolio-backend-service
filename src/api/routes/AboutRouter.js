const cors = require('cors');
const express = require('express');
const AboutController = require('../controllers/AboutController');
const router = express.Router();

router.get('/api/about/all', cors({origin: '*'}), async (req, res) => {
    try {
        const abouts = await AboutController.getAll();
        return res.status(201).json({abouts});
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/about/:name', cors({origin: '*'}), async (req, res) => {
    try {
        const about = await AboutController.getByName(req.params.name);
        return res.status(201).json({about});
    } catch (err) {
        return res.status(400).send();
    }
});

module.exports = router;
