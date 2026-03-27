          // DOM MANIPULATION 
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondsEl = document.getElementById("seconds");


const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime()

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute)/ second)

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    setTimeout(updateCountdown,1000);
}


// auto text animation 

const containerEl = document.getElementById("slogan");

const careers = [
  "Count Down",
   "To New Year",
  "Created By",
    "Rahat Ullah",
  "A Web Developer",
  "A Freelancer",
  "&",
  "UI / UX Designer",
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
