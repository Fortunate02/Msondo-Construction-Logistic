const modal = document.getElementById("jobModal");


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

const jobs = {

    "site-engineer": {

        title: "Senior Site Engineer",
        category: "CONSTRUCTION",
        location: "📍 Various Project Sites",
        type: "🕒 Full-Time",
        salary: "💰 To Be Discussed",
        deadline: "📅 Deadline: 2026-06-30",

        description:
        "We are seeking an experienced Senior Site Engineer to oversee construction operations across multiple projects. You will manage site activities, quality control, safety standards and ensure projects are completed on time.",

        requirements: [
            "Bachelor's Degree in Civil Engineering",
            "Minimum 5 years construction experience",
            "Knowledge of site management",
            "Understanding of safety regulations",
            "Strong leadership skills"
        ],

        benefits: [
            "Career growth opportunities",
            "Training and development",
            "Competitive salary",
            "Leave benefits"
        ]

    },


    "logistics-manager": {

        title: "Logistics Operations Manager",
        category: "LOGISTICS",
        location: "📍 Various Project Sites",
        type: "🕒 Full-Time",
        salary: "💰 To Be Discussed",
        deadline: "📅 Deadline: 2026-07-05",

        description:
        "Responsible for managing transportation operations, coordinating deliveries and ensuring efficient movement of materials.",

        requirements: [
            "Logistics qualification preferred",
            "Experience in fleet management",
            "Good communication skills",
            "Problem solving ability"
        ],

        benefits: [
            "Professional growth",
            "Stable working environment",
            "Performance incentives"
        ]

    },


    "project-coordinator": {

        title: "Project Coordinator",
        category: "PROJECT MANAGEMENT",
        location: "📍 Various Project Sites",
        type: "🕒 Part-Time",
        salary: "💰 To Be Discussed",
        deadline: "📅 Deadline: 2026-07-10",

        description:
        "Coordinate project activities, assist managers and ensure communication between teams.",

        requirements: [
            "Project management knowledge",
            "Administrative skills",
            "Ability to work with teams"
        ],

        benefits: [
            "Flexible schedule",
            "Learning opportunities"
        ]

    }

};



function openModal(jobID){

    const job = jobs[jobID];


    document.getElementById("jobTitle").innerHTML = job.title;

    document.getElementById("jobCategory").innerHTML = job.category;

    document.getElementById("jobLocation").innerHTML = job.location;

    document.getElementById("jobType").innerHTML = job.type;

    document.getElementById("jobSalary").innerHTML = job.salary;

    document.getElementById("jobDeadline").innerHTML = job.deadline;


    document.getElementById("jobDescription").innerHTML =
    job.description;


    document.getElementById("jobRequirements").innerHTML =
    job.requirements
    .map(item => `<li>${item}</li>`)
    .join("");


    document.getElementById("jobBenefits").innerHTML =
    job.benefits
    .map(item => `<li>${item}</li>`)
    .join("");



    document.getElementById("jobModal")
    .style.display = "flex";

}



function closeModal(){

    document.getElementById("jobModal")
    .style.display = "none";

}