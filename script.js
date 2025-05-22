// JavaScript for simple form validation

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you for contacting us! We'll get back to you soon.");
    this.reset();
});
