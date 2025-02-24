document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault()

    // vars - using let not const because changing the value
    //getElementById working better than querySelector for some reason
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let confirmEmail = document.getElementById("confirm-email").value
    let location = document.getElementById("location").value
    let phone = document.getElementById("phone").value
    let service = document.getElementById("service")
    let comments = document.getElementById("comments") //Will keep comments optional
    let errorMessage = "";

    //  Full Name
    if (name === "") {
        errorMessage += "Full Name is required.<br>";
    }

    
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Email check - REGEX!! */
    if (!emailReg.test(email)) {
        errorMessage += "Enter a valid email address.<br>";
    }
    if (email !== confirmEmail) {
        errorMessage += "Emails do not match.<br>";
    }

    // Location
    if (location === "") {
        errorMessage += "Location is needed.<br>";
    }

   
    let phoneReg = /^[0-9]{10,}$/;  // Check phne no with Regex 
    if (!phoneReg.test(phone)) {
        errorMessage += "Enter a valid phone number (10+ digits).<br>";
    }

    
    if (program === "") { // Check if a service is selected
        errorMessage += "Please select a service.<br>";
    }


    
    let errorDiv = document.getElementById("error-message"); 
    if (errorMessage !== "") {
        errorDiv.innerHTML = errorMessage;
        errorDiv.style.display = "block"; // Show the error message
    } else {
        errorDiv.style.display = "none";
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset(); // Reset the form after submission
    }
});
