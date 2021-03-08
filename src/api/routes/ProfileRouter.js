const cors = require('cors');
const express = require('express');
const profileController = require('../controllers/ProfileController');
const router = express.Router();

const corsOptions = {
    origin: '*'
}


router.get('/api/profiles', cors(corsOptions), async (req, res) => {
    try {
        const profiles = await profileController.getAllProfiles();
        return res.status(201).json({ profiles });
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/profiles/:name', cors(corsOptions), async (req, res) => {
    try {
        const profile = await profileController.getProfileByName(req.params.name);
        return res.status(200).json({ profile });
    } catch (err) {
        return res.status(400).send();
    }
    
});

router.get('/health', cors(corsOptions), async (req, res) => {
    return res.status(200).json({ message: 'healthy' });
});

module.exports = router;
