function saveNotes() {
    try {
        const notesTextarea = document.getElementById('notesTextarea');
        const characterNotes = notesTextarea.value;

        // Perform validation if needed
        if (!characterNotes) {
            throw new Error('Character notes cannot be empty');
        }

        // Make a POST request to the server to save character notes
        fetch('/api/characters/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ notes: characterNotes }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to save character notes');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.message);
                alert('Character notes saved!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to save character notes');
            });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to save character notes');
    }
}
