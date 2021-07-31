const cors = require('cors');
const express = require('express');
const PortfolioController = require('../controllers/PortfolioController');
const router = express.Router();

router.get('/api/portfolio/all', cors({origin: '*'}), async (req, res) => {
    try {
        const Portfolios = await PortfolioController.getAll();
        return res.status(201).json({Portfolios});
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/portfolio/:name', cors({origin: '*'}), async (req, res) => {
    try {
        const Portfolio = await PortfolioController.getByName(req.params.name);
        return res.status(201).json({Portfolio});
    } catch (err) {
        return res.status(400).send();
    }
});

module.exports = router;
