const testimonials = [
  {
    name: "Markus Shubla",
    photoUrl: "./images/testimonial-1.png",
    text : "This is simply unbelievable! I would be lost without Apple.The very best. Not able to tell how happy i am with Apple."
  },
  
  {
    name: "Jhon Weik",
    photoUrl: "./images/testimonial-2.png",
    text : "I would also like to say,thank you to al your staff. wow what a great service, I love it! Apple impressed me on multiple levels."
  },
  {
    name: "Diek jamber",
    photoUrl: "./images/testimonial-3.jpeg",
    text : "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have tought of it first. The very best."
  },
  {
    name: "Anders avagardo",
    photoUrl: "./images/testimonial-4.jpeg",
    text : "This is simply unbelievable! I would be lost without Apple.The very best. Not able to tell how happy i am with Apple."
  },

];

const imageEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonials()

function updateTestimonials(){
  const {name,photoUrl,text} = testimonials[idx];
  imageEl.src = photoUrl
  textEl.innerText = text
  usernameEl.innerText = name;
  idx++
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonials()
  }, 4000);
}












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
