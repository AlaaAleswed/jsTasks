document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const date = document.getElementById("date").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const Cemail = document.getElementById("Cemail").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const Cpass = document.getElementById("Cpass").value.trim();

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
        return Swal.fire("Error", "Name must contain letters only.", "error");
    }

    if (!date) {
        return Swal.fire("Error", "Please select your birth date.", "error");
    }
    const birthDate = new Date(date);
    const today = new Date();
    if (birthDate >= today) {
        return Swal.fire("Error", "Birth date must be in the past.", "error");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        return Swal.fire("Error", "Phone number must be exactly 10 digits.", "error");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return Swal.fire("Error", "Invalid Email format", "error");   }
    if (email !== Cemail) {
        return Swal.fire("Error", "Emails do not match.", "error");
    }

    if (!/^[A-Z]/.test(pass)) {
        return Swal.fire("Error", "Password must start with a capital letter.", "error");
    }
    if ((pass.match(/\d/g) || []).length < 2) {
        return Swal.fire("Error", "Password must contain at least two numbers.", "error");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        return Swal.fire("Error", "Password must contain at least one special character.", "error");
    }
    if (pass.length < 8 || pass.length > 32) {
        return Swal.fire("Error", "Password length must be between 8 and 32.", "error");
    }
    if (pass !== Cpass) {
        return Swal.fire("Error", "Passwords do not match.", "error");
    }

    Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success"
    });
});
