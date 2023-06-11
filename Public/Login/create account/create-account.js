document.getElementById('createAccountForm').addEventListener('Create Account', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password and confirm password match
    if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
        return;
    }

    // Create an object to hold the user data
    const userData = {
        username: username,
        password: password
    };

    // Make a POST request to the server to handle user account creation
    fetch('/create-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            window.location.href = 'Dashboard/dashboard.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
document.getElementById('loginForm').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../login.html';
});
