var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
    sidenav.style.left = "0";
});

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%";
});
//form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    } else if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});