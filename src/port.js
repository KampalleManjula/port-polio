document.addEventListener("DOMContentLoaded", function () {
    // Ask for user's name on page load and greet them
    let userName = prompt("Welcome! Please enter your name:");
    if (userName) {
        alert("Hello, " + userName + "! Welcome to My Portfolio.");
    } else {
        alert("Hello! Welcome to My Portfolio.");
    }

    const toggleDarkMode = document.getElementById("toggleDarkMode");
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const nameField = document.getElementById("name-input");
        const emailField = document.getElementById("email-input");
        const messageField = document.getElementById("message");

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Form validation
        if (!name) {
            alert("Please enter your name.");
            return;
        }

        if (!email) {
            alert("Please enter your email.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!message) {
            alert("Please enter your message.");
            return;
        }

        // If validation passes, show success message and clear the form
        formFeedback.classList.remove("hidden");
        formFeedback.textContent = "Your message has been sent successfully, " + name + "!";
        
        // Clear the form fields
        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
    });
});
