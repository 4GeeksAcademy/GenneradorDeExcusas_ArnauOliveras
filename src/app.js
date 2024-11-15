/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let randomWho = getRandomElement(who);
  let randomAction = getRandomElement(action);
  let randomWhat = getRandomElement(what);
  let randomWhen = getRandomElement(when);

  let randomSentence = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  let element = document.getElementById("excuse");
  element.textContent = randomSentence;
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
