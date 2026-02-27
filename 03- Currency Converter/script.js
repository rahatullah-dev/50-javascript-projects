const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/26cf94b06bb1d3d93615b453/latest/${currencyFirstEl.value}`).then((res)=> res.json()).then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

        worthSecondEl.value  = (worthFirstEl.value * rate).toFixed(2)
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input",updateRate)

exchangeRateEl.innerText = "Loading...";



// auto text animation 

const containerEl = document.getElementById("slogan");

const careers = [
    "I am Rahat Ullah",
    "A Front-End",
  "Web Developer",
  "A Freelancer",
  "& Graphic Designer",
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h4>${careers[careerIndex].slice(0, 1) === "I" ? "" : ""} ${careers[careerIndex].slice(0, characterIndex)} </h4>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
