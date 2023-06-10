// Example code for dynamically generating the saved character list
// Replace this code with your actual logic for fetching and displaying saved characters
window.addEventListener('DOMContentLoaded', function () {
    const characterList = document.querySelector('.character-list ul');

    // Dummy data for saved characters
    const savedCharacters = [
        { id: 1, name: 'Character 1' },
        { id: 2, name: 'Character 2' },
        { id: 3, name: 'Character 3' }
    ];

    // Generate saved character list dynamically
    savedCharacters.forEach(character => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `character-details.html?id=${character.id}`;
        link.textContent = character.name;
        listItem.appendChild(link);
        characterList.appendChild(listItem);
    });
});
