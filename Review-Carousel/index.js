
const reviewImg = document.getElementById("per-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 0;

const reviews = [
     {
          id: 1,
          job: "Software Developer",
          name: "Anbu C",
          img:"../public//Img1.jpg",
          text:"Works on developing full-stack applications using HTML, CSS, Javascript, Angular, React, Databases, Node, Express, etc;"

     },
     {
          id: 2,
          job: "Web Developer",
          name: "Jeevi",
          img:"../public//Img2.jpg",
          text:"Works on developing full-stack applications using HTML, CSS, Javascript, Angular, React, Databases, Node, Express, etc;"

     },
     {
          id: 3,
          job: "FullStack Developer",
          name: "Sudha",
          img:"../public//Img3.jpg",
          text:"Works on developing full-stack applications using HTML, CSS, Javascript, Angular, React, Databases, Node, Express, etc;"

     }
]

prevBtn.addEventListener('click', function(){
     currentItem--;
     if(currentItem<0){
          currentItem = reviews.length-1;
     }
     showPerson();
});

nextBtn.addEventListener('click', function(){
     currentItem++;
     if(currentItem>=reviews.length){
          currentItem = 0;
     }
     showPerson();
});

randomBtn.addEventListener("click", function(){
       currentItem = Math.floor(Math.random()*reviews.length);
       showPerson();
});

function showPerson(){
     const item = reviews[currentItem];
     reviewImg.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
}

window.addEventListener("DOMContentLoaded", function(){
      showPerson();

});
