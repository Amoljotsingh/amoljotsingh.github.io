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
