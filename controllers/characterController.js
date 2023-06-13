const Character = require('../models/Character');

// Create a new character
const createCharacter = async (req, res) => {
    try {
        const characterData = req.body;
        const character = await Character.create(characterData);
        res.status(201).json({ success: true, character});
    } catch (error) {
        res.status(500).json({ error: 'Failed to create character' });
    }
};

// Get all characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json({ success: true, characters});
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve characters' });
    }
};

// Get a character by ID
const getCharacterById = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findById(id);
        if (!character) {
            return res.status(404).json({ success: false, error: 'Character not found' });
        }
        res.json({ success: true, character});
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to retrieve character' });
    }
};


// Update a character and save notes
const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const characterData = req.body;
        const character = await Character.findByIdAndUpdate(id, characterData, { new: true });
        if (!character) {
            return res.status(404).json({ success: false, error: 'Character not found' });
        }
        character.notes = characterData.notes; // Save the notes field from the request
        await character.save(); // Save the updated character
        res.json({ success: true, character});
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to update character' });
    }
};


// Delete a character
const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findByIdAndDelete(id);
        if (!character) {
            return res.status(404).json({ success: false, error: 'Character not found' });
        }
        res.json({ success: true, message: 'Character deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to delete character' });
    }
};

module.exports = {
    createCharacter,
    getAllCharacters,
    getCharacterById,
    updateCharacter,
    deleteCharacter
};
