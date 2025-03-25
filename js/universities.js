document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container-items-display");
  const universityList = [
    {
      name: "University of Miami",
      url: "https://admissions.miami.edu/undergraduate/financial-aid/scholarships/stamps/index.html",
      image: "./assets/miami.jpg",
      description:
        "Prepare for today's interconnected, global world with an education that's broad, deep, and uniquely your own. At the University of Miami, you will be able to individualize your academic experience with programs that cater to your strengths, goals, and curiosities.",
    },
    {
      name: "Simmons University",
      url: "https://www.simmons.edu/undergraduate/admission-and-financial-aid/tuition-financial-aid/types-financial-aid/scholarships/kotzen",
      image: "./assets/Simmons.jpg",
      description:
        "The Simmons Distinguished Scholar Award is a competitive merit award that recognizes the best and brightest students interested in a transformative education at Simmons University.",
    },
    {
      name: "East West Center",
      url: "https://www.eastwestcenter.org/education/ewc-graduate-degree-fellowship",
      image: "./assets/stwart.webp",
      description:
        "The East-West Center Graduate Degree Fellowship provides funding for students pursuing graduate study at the University of Hawaii while participating in educational and leadership development programs.",
    },
    {
      name: "Bright Scholarship",
      url: "https://brightscholarship.com/ursinus-gateway-international-scholarship-in-usa/",
      image: "./assets/miami.jpg",
      description:
        "Bright Scholarship provides funding for international students aiming to pursue undergraduate and graduate studies in the USA.",
    },
    {
      name: "University of Miami - Young Leaders Fellowship",
      url: "https://brightscholarship.com/mcw-young-leaders-fellowship-program-2025/",
      image: "./assets/miami.jpg",
      description:
        "MCW’s Young Leaders Fellowship Program is designed to support young leaders across the world in their professional and academic development.",
    },
  ];

  const ul = document.createElement("ul");

  universityList.forEach((university, index) => {
    const li = document.createElement("li");
    li.setAttribute("key", index);
    li.innerHTML = `
        <h2>${university.name}</h2>
        <img src="${university.image}" alt="${university.name}" />
        <p>${university.description}</p>
        <a href="${university.url}" target="_blank">Learn More</a>
      `;
    ul.appendChild(li);
    console.log(university.url);
  });

  container.appendChild(ul);
});
