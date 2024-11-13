document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out, " + document.getElementById("name").value + "!");
    document.getElementById("contactForm").reset();
});
