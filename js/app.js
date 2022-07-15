// A way to add cards dynamically; but this site is only static :(

const data = [
  {
    image:
      "../asserts/portfolio/Pierre-Jeanneret-house-photo-by-amol-singh-cover.webp",
    alt: "chandigarh villa",
    title: "Ar. Pierre Jeanneret House, Chandigarh",
  },
  {
    image: "https://unsplash.com/photos/LEuQ-CUg7kY",
    alt: "house in the park render",
    title: "Drone Park, Chandigarh",
  },
];

data.forEach((element, i) => {
  const main = document.querySelector(".main");
  console.log(main);

  const card = document.createElement("div");
  card.classList = "card";

  const artCard = `
        <img
            src="${data[i].image}"
            alt="${data[i].alt}"
        />
        <h3>${data[i].title}</h3>
        <button>Hover Over Me!</button>
  `;

  card.innerHTML += artCard;
  main.appendChild(card);
});
