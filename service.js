document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const currentDate = new Date();
    const openingDate = new Date('2024-11-29T00:00:00');

    if (currentDate >= openingDate) {
        messageElement.textContent = 'The service is now open!';
    } else {
        messageElement.textContent = 'The service is not yet open. It will open on December 1, 2024 at midnight.';
    }
});