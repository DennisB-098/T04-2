
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    let currentPage = "index";

    if (path.includes("Televisions")) {
        currentPage = "televisions";
    } else if (path.includes("AboutUs")) {
        currentPage = "about";
    }

    document.querySelectorAll(".navLink").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
});


function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = "<p>© " + currentYear + " Dennis Balan Paulos</p>";
}

function logoClick() {
    document.getElementById("logo").onclick = function () {
        window.location.href = "index.html";
    }
}
function navBar() {
    document.getElementById("homelink").onclick = function () {
        window.location.href = "index.html";
    };

    document.getElementById("telelink").onclick = function () {
        window.location.href = "Televisions.html";
    };

    document.getElementById("aboutlink").onclick = function () {
        window.location.href = "AboutUs.html";
    };
}


function init() {
    updateYear();
    logoClick();
    navBar();
}
window.onload = init;