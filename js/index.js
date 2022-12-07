import {plantsDescriptions, lessons} from "./data.js";

const saponins = lessons[0];
const plants = saponins.plants;

const cards = plants.map((plant, index) => {
  const $card = document.createElement("div");
  $card.className = "card";
  $card.innerHTML = `
  <img class="card_img" src="gnozia/${saponins.header}/${index}.jpg" alt="">
  <div class="card_description">${marked.parse(plantsDescriptions[plant])}</div>
  `;
  return {
    plant: plant,
    $card,
  };
});

document.addEventListener("click", e => {
  if(!(e.target.classList.contains("card") || e.target.closest(".card"))) return;
  const $card = e.target.classList.contains("card") ? e.target : e.target.closest(".card");

  $card.classList.toggle("open");
});

const $card_container = document.querySelector("#card_container");

document.querySelector("#random_button").addEventListener("click", e => {
  clearCard();

  const card = cards[Math.floor(Math.random() * cards.length)];
  $card_container.append(card.$card);
});

const $currentLesson = document.querySelector("#lesson_name")

document.querySelector("#lesson_random_button").addEventListener("click", e => {
  clearCard();

  const plants = [...new Set(lessons.find(lesson => lesson.header === $currentLesson.value).plants)];
  const plant = plants[Math.floor(Math.random() * plants.length)];

  const card = cards.find(card => card.plant === plant);
  $card_container.append(card.$card);
});

document.addEventListener("keypress", e => {
  if(e.code === "Space") document.querySelector("#lesson_random_button").click();
})

function clearCard() {
  $card_container.querySelector(".card")?.classList?.remove("open");
  $card_container.innerHTML = "";
}
