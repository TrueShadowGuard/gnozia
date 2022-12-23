import { lessons } from "./data.js";
const $select = document.querySelector("#lesson_name");
if ($select !== null) {
    lessons.forEach(lesson => {
        $select.innerHTML += `
    <option>${lesson.header}</option>  
  `;
    });
}
else {
    throw "Lesson select not found";
}
