import {lessons} from "./data";

const $select: HTMLSelectElement | null = document.querySelector("#lesson_name");

const defaultSelected = "kolok4";

if($select !== null) {
  lessons.forEach(lesson => {
    $select.innerHTML += `
    <option selected="${lesson.header === defaultSelected}">${lesson.header}</option>  
  `;
  })
} else {
  throw "Lesson select not found";
}