document.addEventListener("DOMContentLoaded", function() {

    const loader = document.querySelector(".loading-screen");

    setTimeout(function() {

        loader.style.opacity = "0";

        setTimeout(function() {
            loader.style.display = "none";
        }, 1000);

    }, 4000);

});
