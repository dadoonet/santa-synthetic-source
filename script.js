document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'santa') {
        window.location.href = 'service.html';
    } else {
        alert('Incorrect password');
    }
});