import {lessons} from "./data.js";

const $select = document.querySelector("#lesson_name");

lessons.forEach(lesson => {
  $select.innerHTML += `
    <option>${lesson.header}</option>  
  `;
})