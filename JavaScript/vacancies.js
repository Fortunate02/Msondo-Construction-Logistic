const modal = document.getElementById("jobModal");

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Optional: ESC key closes modal
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});