function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "250723") {
        window.location.href = "index.html";
    } else {
        alert("Wrong password");
    }
}