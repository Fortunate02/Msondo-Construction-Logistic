const tabs = document.querySelectorAll('.service-tab');
const projectType = document.getElementById('projectType');

const serviceOptions = {
    construction: [
        'Residential Building',
        'Commercial Building',
        'Renovation',
        'Road Construction',
        'Infrastructure Project'
    ],
    logistics: [
        'Transportation',
        'Warehousing',
        'Freight Forwarding',
        'Distribution',
        'Supply Chain Management'
    ],
    projectmanagement: [
        'Construction Project',
        'IT Project',
        'Business Project',
        'Engineering Project',
        'Consulting Services'
    ]
};

function updateProjectTypes(service) {
    projectType.innerHTML = '<option>Select a type</option>';

    serviceOptions[service].forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option;
        newOption.textContent = option;
        projectType.appendChild(newOption);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // Remove active class from all buttons
        tabs.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        tab.classList.add('active');

        // Update project types
        updateProjectTypes(tab.dataset.service);
    });
});

// Load default active tab (Logistics)
updateProjectTypes('logistics');


