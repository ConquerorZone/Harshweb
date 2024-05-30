document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    const message = document.getElementById('contactMessage').value;

    if (name && message) {
        alert(`Thank you, ${name}! Your message has been received: ${message}`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
