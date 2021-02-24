const express = require('express');
const profileController = require('../controllers/ProfileController');
const router = express.Router();

router.get('/api/profiles', async (req, res) => {
    try {
        const profiles = await profileController.getAllProfiles();
        res.status(201).json({
            message: 'Get all success',
            profiles
        })
    } catch (error) {
        res.status(400).send();
    }
});

router.get('/api/profiles/:name', async (req, res) => {
    try {
        const profile = await profileController.getProfileByName(req.params.name);
        res.status(200).json({
            message: 'Profile by name was fetched',
            profile
        });
    } catch (err) {
        res.status(400).send();
    }
    
});

module.exports = router;
