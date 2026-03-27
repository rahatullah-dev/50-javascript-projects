const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector("body");


inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.background = "black";
  }else{
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener
("input",()=>{
  updateBody();
  updateLocalStorage();
})

function updateLocalStorage(){
  localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}



// auto text animation 

const containerEl = document.getElementById("slogan");

const careers = [
    "Rahat Ullah",
  "Web Developer",
  "Freelancer",
  "Graphic Designer",
  "Computer Instructor",
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h4>${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"}
   ${careers[careerIndex].slice(0, characterIndex)} </h4>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
