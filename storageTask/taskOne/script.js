// عند الضغط على Submit
document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault();

    //local storage
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const desc = document.getElementById("desc").value.trim();
    const major = document.getElementById("major").value.trim();
    const university = document.getElementById("university").value.trim();
    const languages = [];
    document.querySelectorAll(".checkboxes input:checked").forEach(ch => {
        languages.push(ch.value);
    });

    if (languages.length < 3) {
        alert("You must choose at least 3 programming languages!");
        return;
    }
    const info = { name, age, gender, desc, major, university, languages };

    let allData = JSON.parse(localStorage.getItem("personalData")) || [];
    allData.push(info);
    localStorage.setItem("personalData", JSON.stringify(allData));

    //session
    const sub = document.getElementById("sub").value.trim();
    const projectDesc = document.getElementById("description").value.trim();
    const users = document.getElementById("users").value.trim();
    const tech = document.getElementById("tech").value.trim();

    const project = { sub, projectDesc, users, tech };

    let allProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    allProjects.push(project);
    sessionStorage.setItem("projects", JSON.stringify(allProjects));

    renderCards();     
    renderProjectCards(); 

    document.getElementById("dataForm").reset();
});

function renderCards() {
    const cardsDiv = document.getElementById("cards");
    cardsDiv.innerHTML = "";
    let allData = JSON.parse(localStorage.getItem("personalData")) || [];
    allData.forEach(data => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Description:</strong> ${data.desc}</p>
            <p><strong>Major:</strong> ${data.major}</p>
            <p><strong>University:</strong> ${data.university}</p>
            <p><strong>Languages:</strong> ${data.languages.join(", ")}</p>
        `;
        cardsDiv.appendChild(card);
    });
}

function renderProjectCards() {
    const cardsDiv = document.getElementById("cards");
    let allProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    allProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${project.sub}</h3>
            <p><strong>Description:</strong> ${project.projectDesc}</p>
            <p><strong>User Types:</strong> ${project.users}</p>
            <p><strong>Technology Used:</strong> ${project.tech}</p>
        `;
        cardsDiv.appendChild(card);
    });
}

renderCards();
renderProjectCards();
