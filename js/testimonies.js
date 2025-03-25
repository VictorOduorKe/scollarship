export const testimonies = [
    {
        image: "./assets/testimony1.jpeg",
        singleMessage: "I am so grateful for the opportunity to play college soccer and earn my degree",
        name: "Athlete1"
    },
    {
        image: "./assets/image2.jpg",
        singleMessage: "I am so grateful for the opportunity to play college soccer and earn my degree",
        name: "Athlete2"
    },
    {
        image: "./assets/image3.jpg",
        singleMessage: "I am so grateful for the opportunity to play college soccer and earn my degree",
        name: "Athlete3"
    }
];

 function renderTestimonies(containerSelector) {
    const testimonyArea = document.querySelector(containerSelector);
    if (!testimonyArea) return;

    testimonies.forEach(testimony => {
        const testimonyCard = document.createElement("div");
        testimonyCard.classList.add("testimonial");

        testimonyCard.innerHTML = `
            <img src="${testimony.image}" alt="${testimony.name}">
            <p>${testimony.singleMessage}</p>
            <h3>${testimony.name}</h3>
        `;

        testimonyArea.append(testimonyCard);
    });
}
renderTestimonies(".testimonials"); 

