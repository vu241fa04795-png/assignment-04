// Sidebar toggle (for future mobile support)

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// Search functionality

const searchInput = document.querySelector(".search-bar input");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

});