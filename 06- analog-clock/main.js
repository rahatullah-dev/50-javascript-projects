// DOM MANIPULATION

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")


function updateClock(){
    const currentDate = new Date();
    // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg})deg)`;
}
setInterval(updateClock,1000);

// updateClock();






// auto text animation 

const containerEl = document.getElementById("slogan");

const careers = [
    "Analog Clock",
  "Developed By",
  "   Rahat Ullah               ",
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h4>${careers[careerIndex].slice(0, 1) === "I" ? "an" : ""} ${careers[careerIndex].slice(0, characterIndex)} </h4>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
