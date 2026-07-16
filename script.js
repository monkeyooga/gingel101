function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "250723") {
        window.location.href = "home.html";
    } else {
        alert("Wrong password");
    }
}