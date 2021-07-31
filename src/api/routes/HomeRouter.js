const cors = require('cors');
const express = require('express');
const HomeController = require('../controllers/HomeController');
const router = express.Router();

router.get('/api/home/all', cors({origin: '*'}), async (req, res) => {
    try {
        const Homes = await HomeController.getAll();
        return res.status(201).json({Homes});
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/home/:name', cors({origin: '*'}), async (req, res) => {
    try {
        const Home = await HomeController.getByName(req.params.name);
        return res.status(201).json({Home});
    } catch (err) {
        return res.status(400).send();
    }
});

module.exports = router;
