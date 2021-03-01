const express = require('express');
const profileController = require('../controllers/ProfileController');
const router = express.Router();

router.get('/api/profiles', async (req, res) => {
    try {
        const profiles = await profileController.getAllProfiles();
        return res.status(201).json({
            message: 'Get all success',
            profiles
        })
    } catch (error) {
        return res.status(400).send();
    }
});

router.get('/api/profiles/:name', async (req, res) => {
    try {
        const profile = await profileController.getProfileByName(req.params.name);
        return res.status(200).json({
            message: 'Profile by name was fetched',
            profile
        });
    } catch (err) {
        return res.status(400).send();
    }
    
});

router.get('/health', async (req, res) => {
    return res.status(200).json({
        message: 'healthy'
    })
});

module.exports = router;
