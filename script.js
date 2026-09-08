const requirements = [

  {
    id: 1,

    title: "Registered Nurse",

    company: "Example Healthcare Group",

    category: "Healthcare",

    city: "Houston",

    state: "TX",

    type: "Contract",

    openings: 12,

    salary: "$42 - $50/hr",

    posted: "Today",

    poc: "Sample Recruiting Contact",

    pocTitle: "Talent Acquisition Manager",

    pocStatus: "Public POC",

    description:
      "Sample healthcare requirement for demonstrating the platform. This is not a real job posting."
  },


  {
    id: 2,

    title: "Warehouse Associates",

    company: "Example Manufacturing LLC",

    category: "Warehouse",

    city: "Dallas",

    state: "TX",

    type: "Contract",

    openings: 25,

    salary: "$20 - $25/hr",

    posted: "Today",

    poc: "Sample Recruiting Contact",

    pocTitle: "Recruiter",

    pocStatus: "Public POC",

    description:
      "Sample warehouse requirement for demonstrating the platform. This is not a real job posting."
  },


  {
    id: 3,

    title: "Production Supervisor",

    company: "Example Manufacturing LLC",

    category: "Manufacturing",

    city: "Chicago",

    state: "IL",

    type: "Permanent",

    openings: 3,

    salary: "$70K - $85K",

    posted: "Yesterday",

    poc: "Sample HR Contact",

    pocTitle: "Human Resources Manager",

    pocStatus: "Public POC",

    description:
      "Sample manufacturing requirement for demonstrating the platform."
  },


  {
    id: 4,

    title: "Construction Laborers",

    company: "Example Construction Co.",

    category: "Construction",

    city: "Miami",

    state: "FL",

    type: "Contract",

    openings: 18,

    salary: "$22 - $30/hr",

    posted: "Yesterday",

    poc: "Sample Recruiting Contact",

    pocTitle: "Recruiter",

    pocStatus: "Public POC",

    description:
      "Sample construction requirement for demonstrating the platform."
  },


  {
    id: 5,

    title: "Logistics Coordinator",

    company: "Example Logistics Inc.",

    category: "Logistics",

    city: "Los Angeles",

    state: "CA",

    type: "Permanent",

    openings: 5,

    salary: "$55K - $65K",

    posted: "2 days ago",

    poc: "Sample Talent Contact",

    pocTitle: "Talent Acquisition",

    pocStatus: "Public POC",

    description:
      "Sample logistics requirement for demonstrating the platform."
  },


  {
    id: 6,

    title: "Accounts Payable Specialist",

    company: "Example Services Inc.",

    category: "Accounting",

    city: "New York",

    state: "NY",

    type: "Permanent",

    openings: 2,

    salary: "$60K - $70K",

    posted: "2 days ago",

    poc: "Sample HR Contact",

    pocTitle: "HR Manager",

    pocStatus: "Public POC",

    description:
      "Sample accounting requirement for demonstrating the platform."
  }

];


function displayRequirements(data) {

  const container =
    document.getElementById("requirementsList");

  container.innerHTML = "";

  document.getElementById("resultCount").innerText =
    `${data.length} requirements found`;

  if (data.length === 0) {

    container.innerHTML = `
      <div class="requirement-card">
        <h3>No requirements found</h3>
        <p class="company">
          Try another search or filter.
        </p>
      </div>
    `;

    return;
  }


  data.forEach(requirement => {

    const card = document.createElement("div");

    card.className = "requirement-card";


    card.innerHTML = `

      <div class="card-top">

        <div>

          <div class="card-title">
            ${requirement.title}
          </div>

          <div class="company">
            ${requirement.company}
          </div>

          <div class="location">
            ${requirement.city}, ${requirement.state}
          </div>

        </div>

        <div class="open">
          OPEN
        </div>

      </div>


      <div class="details">

        <div class="detail">
          <label>Category</label>
          <strong>${requirement.category}</strong>
        </div>

        <div class="detail">
          <label>Openings</label>
          <strong>${requirement.openings}</strong>
        </div>

        <div class="detail">
          <label>Type</label>
          <strong>${requirement.type}</strong>
        </div>

      </div>


      <div class="details">

        <div class="detail">
          <label>Compensation</label>
          <strong>${requirement.salary}</strong>
        </div>

        <div class="detail">
          <label>Posted</label>
          <strong>${requirement.posted}</strong>
        </div>

        <div class="detail">
          <label>NON-IT</label>
          <strong>✓ Yes</strong>
        </div>

      </div>


      <div class="poc">

        <div class="poc-title">
          PUBLIC PROFESSIONAL CONTACT
        </div>

        <div class="poc-name">
          ${requirement.poc}
        </div>

        <div class="location">
          ${requirement.pocTitle}
        </div>

        <div class="verified">
          ✓ ${requirement.pocStatus}
        </div>

      </div>


      <button
        class="view-button"
        onclick="openRequirement(${requirement.id})"
      >
        View Requirement
      </button>

    `;


    container.appendChild(card);

  });

}


function searchRequirements() {

  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const state =
    document
      .getElementById("stateFilter")
      .value;

  const category =
    document
      .getElementById("categoryFilter")
      .value;


  const filtered =
    requirements.filter(requirement => {

      const matchesSearch =
        !search ||
        requirement.title.toLowerCase().includes(search) ||
        requirement.company.toLowerCase().includes(search) ||
        requirement.category.toLowerCase().includes(search) ||
        requirement.city.toLowerCase().includes(search);


      const matchesState =
        !state ||
        requirement.state === state;


      const matchesCategory =
        !category ||
        requirement.category === category;


      return (
        matchesSearch &&
        matchesState &&
        matchesCategory
      );

    });


  displayRequirements(filtered);

}


function openRequirement(id) {

  const requirement =
    requirements.find(r => r.id === id);

  if (!requirement) return;


  document.getElementById("modalContent").innerHTML = `

    <div class="small-title">
      ${requirement.category}
    </div>

    <h2>
      ${requirement.title}
    </h2>

    <p class="company">
      ${requirement.company}
    </p>

    <div class="modal-section">

      <h3>Location</h3>

      <p>
        ${requirement.city}, ${requirement.state}
      </p>

    </div>


    <div class="modal-section">

      <h3>Requirement</h3>

      <p>
        ${requirement.description}
      </p>

    </div>


    <div class="modal-section">

      <h3>Details</h3>

      <p>
        Openings: ${requirement.openings}<br>
        Employment Type: ${requirement.type}<br>
        Compensation: ${requirement.salary}<br>
        Posted: ${requirement.posted}
      </p>

    </div>


    <div class="modal-section">

      <h3>POC</h3>

      <p>
        <strong>${requirement.poc}</strong><br>
        ${requirement.pocTitle}<br>
        ✓ ${requirement.pocStatus}
      </p>

    </div>


    <div class="modal-section">

      <h3>Important</h3>

      <p>
        This demonstration record contains sample information.
        Real POC information should only be displayed when it is
        legitimately publicly available and appropriate to publish.
      </p>

    </div>

  `;


  document.getElementById("modal").style.display =
    "block";

}


function closeModal() {

  document.getElementById("modal").style.display =
    "none";

}


document
  .getElementById("searchInput")
  .addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
      searchRequirements();
    }

  });


document
  .getElementById("stateFilter")
  .addEventListener("change", searchRequirements);


document
  .getElementById("categoryFilter")
  .addEventListener("change", searchRequirements);


document.getElementById("totalRequirements").innerText =
  requirements.length;


displayRequirements(requirements);
