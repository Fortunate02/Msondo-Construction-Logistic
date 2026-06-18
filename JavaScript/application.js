const modal = document.getElementById("applicationModal");
const positionInput = document.getElementById("positionInput");
const jobTitle = document.getElementById("jobTitle");

document.querySelectorAll(".apply-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const job = btn.dataset.job;

        modal.classList.remove("hidden");
        modal.classList.add("flex");

        positionInput.value = job;
        jobTitle.textContent = job;
    });

});

function closeApplicationModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

document.getElementById("closeModal")
    .addEventListener("click", closeApplicationModal);

document.getElementById("cancelModal")
    .addEventListener("click", closeApplicationModal);


/* PDF + 5MB Validation */

document.querySelectorAll('input[type="file"]').forEach(file => {

    file.addEventListener("change", function() {

        const selected = this.files[0];

        if(!selected) return;

        if(selected.type !== "application/pdf") {

            alert("Only PDF files allowed.");
            this.value = "";
            return;
        }

        if(selected.size > 5 * 1024 * 1024) {

            alert("Maximum file size is 5MB.");
            this.value = "";
            return;
        }
    });

});
