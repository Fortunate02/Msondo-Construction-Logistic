
 window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); // 5 seconds
    });
    
function openModal() {
    document.getElementById("logisticsModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("logisticsModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("logisticsModal");

    if (event.target === modal) {
        closeModal();
    }
}

