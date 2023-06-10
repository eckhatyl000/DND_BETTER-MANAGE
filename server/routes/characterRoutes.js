const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

// Create a new character
router.post('/', characterController.createCharacter);

// Get all characters
router.get('/', characterController.getAllCharacters);

// Get a character by ID
router.get('/:id', characterController.getCharacterById);

// Update a character
router.put('/:id', characterController.updateCharacter);

// Delete a character
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
