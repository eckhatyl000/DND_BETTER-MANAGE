window.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to fetch the user account information from the server
    fetch('/api/account')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch account information');
            }
            return response.json();
        })
        .then((data) => {
            // Update account information in the HTML
            document.getElementById('username').textContent = data.username;
            document.getElementById('email').textContent = data.email;
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to fetch account information');
        });
});

