import {plantsDescriptions, lessons} from "./data.js";

const lessonsHydrated = Object.fromEntries(lessons.map(lesson => {
  return [
    lesson.header,
    {plants: lesson.plants.map(plantToCard(lesson))}
  ]
}));

function plantToCard(lesson) {
  return function (plant, index) {
    const $card = document.createElement("div");
    $card.className = "card";
    $card.innerHTML = `
  <img class="card_img" src="gnozia/${lesson.header}/${index}.jpg" alt="">
  <div class="card_description">${marked.parse(plantsDescriptions[plant])}</div>
  <p>${index + 1} из ${lesson.plants.length}</p>
  `;
    const card = {
      plant: plant,
      index,
      lesson,
      $card,
    };

    $card._card = card;

    return card;
  }
}


document.addEventListener("click", e => {
  if(!(e.target.classList.contains("card") || e.target.closest(".card"))) return;
  const $card = e.target.classList.contains("card") ? e.target : e.target.closest(".card");

  $card.classList.toggle("open");
});

const $card_container = document.querySelector("#card_container");

document.querySelector("#random_button").addEventListener("click", e => {
  clearCard();

  const cards = Object.values(lessonsHydrated).flatMap(lesson => lesson.plants);
  const $card = cards[Math.floor(Math.random() * cards.length)].$card;

  $card_container.append($card);
});

const $currentLesson = document.querySelector("#lesson_name")

document.querySelector("#lesson_random_button").addEventListener("click", e => {
  clearCard();

  const plants = lessonsHydrated[$currentLesson.value].plants;
  const $card = plants[Math.floor(Math.random() * plants.length)].$card;

  $card_container.append($card);
});

document.addEventListener("keypress", e => {
  if(e.code === "Space") document.querySelector("#lesson_random_button").click();
})

function clearCard() {
  $card_container.querySelector(".card")?.classList?.remove("open");
  $card_container.innerHTML = "";
}

const $lessonNextButton = document.querySelector("#lesson_next_button");

$lessonNextButton.addEventListener("click", e => {
  const card = document.querySelector(".card")._card;
  const index = (card.index + 1) % card.lesson.plants.length;
  clearCard();
  $card_container.append(lessonsHydrated[card.lesson.header].plants[index].$card);
});