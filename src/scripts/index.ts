import {marked} from "marked";
import {plantsDescriptions, lessons, Lesson} from "./data";
import "./hydrateSelect";

type PlantCard = {
    plant: string;
    index: number;
    lesson: Lesson;
    $card: HTMLElement
}

plantsDescriptions.then(plantsDescriptions => {
    const lessonsHydrated = Object.fromEntries(lessons.map(lesson => {
        return [
            lesson.header,
            {plants: lesson.plants.map(plantToCard(lesson))}
        ]
    }));
    
    function plantToCard(lesson: Lesson) {
        return function (plant: string, index: number) {
            const $card: HTMLDivElement = document.createElement("div");
            $card.className = "card";
            $card.innerHTML = `
      <p>${index + 1} из ${lesson.plants.length} ${lesson.header}</p>
      <img class="card_img" src="static/${lesson.header}/${index}.jpg" alt="">
      <div class="card_description">${marked.parse(plantsDescriptions[plant] || "Нет описания к " + plant)}</div>
      `;
    
            const card: PlantCard = {
                plant,
                index,
                lesson,
                $card,
            };
    
            $card._custom = {card};
    
            return card;
        }
    }
    
    
    document.addEventListener<"click">("click", e => {
        const target = e.target as HTMLElement;
        if (!(target.classList.contains("card") || target.closest(".card"))) return;
        const $card = target.classList.contains("card") ? target : target.closest(".card");
    
        if ($card !== null) {
            $card.classList.toggle("open");
        }
    });
    
    const $cardContainer: HTMLElement | null = document.querySelector("#card_container");
    if ($cardContainer === null) throw "Card container not found";
    
    const $randomButton: HTMLButtonElement | null = document.querySelector("#random_button");
    if ($randomButton === null) throw "Random button not found";
    
    $randomButton.addEventListener("click", e => {
        clearCard();
    
        const cards = Object.values(lessonsHydrated).flatMap(lesson => lesson.plants);
        const $card = cards[Math.floor(Math.random() * cards.length)].$card;
    
        $cardContainer.append($card);
    });
    
    const $currentLesson: HTMLSelectElement | null = document.querySelector("#lesson_name");
    if ($currentLesson === null) throw "Current lesson not found";
    
    $currentLesson.addEventListener("change", e => {
        setCard(lessonsHydrated[$currentLesson.value].plants[0].$card);
    });
    
    const $lessonRandomButton: HTMLButtonElement | null = document.querySelector("#lesson_random_button");
    if (!$lessonRandomButton) throw "Lesson random button not found";
    
    $lessonRandomButton.addEventListener<"click">("click", e => {
        const plants = lessonsHydrated[$currentLesson.value].plants;
        const $card = plants[Math.floor(Math.random() * plants.length)].$card;
        setCard($card);
    });
    
    function clearCard() {
        if ($cardContainer === null) return;
        $cardContainer.querySelector(".card")?.classList?.remove("open");
        $cardContainer.innerHTML = "";
    }
    
    function setCard($card: HTMLElement) {
        if ($cardContainer === null) return;
        clearCard();
        $cardContainer.append($card);
    }
    
    function getCurrentCard(): PlantCard | null {
        const $card: HTMLDivElement | null = document.querySelector(".card");
        if ($card === null) {
            console.warn("card is null")
            return null;
        }
        return $card._custom.card as PlantCard;
    }
    
    const $lessonNextButton: HTMLButtonElement | null = document.querySelector("#lesson_next_button");
    
    if (!$lessonNextButton) throw "Lesson next button not found";
    
    $lessonNextButton.addEventListener<"click">("click", e => {
        const card = getCurrentCard();
        if (card === null) return;
    
        const index = (card.index + 1) % card.lesson.plants.length;
        setCard(lessonsHydrated[card.lesson.header].plants[index].$card);
    });
    
    const $lessonPrevButton: HTMLButtonElement | null = document.querySelector("#lesson_prev_button");
    if ($lessonPrevButton === null) throw "Prev button not found";
    
    $lessonPrevButton.addEventListener("click", e => {
        const card = getCurrentCard();
        if (card === null) return;
    
        const index = card.index === 0 ? card.lesson.plants.length - 1 : card.index - 1;
        setCard(lessonsHydrated[card.lesson.header].plants[index].$card);
    });

    setCard(lessonsHydrated[$currentLesson.value].plants[0].$card);

    document.addEventListener("keydown", e => {
        console.log(e.code)
        switch(e.code) {
            case "ArrowLeft":
                $lessonPrevButton.click();
                break;
            case "ArrowRight":
                $lessonNextButton.click();
                break;
            case "Slash":
                document.querySelector<HTMLElement>(".card")?.click();
                break;
        }
    })
})

