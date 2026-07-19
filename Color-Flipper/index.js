const colors = ["green", "red", "deeppink", "orange"];
const color = document.querySelector('.color');
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const random = generateRandom();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];

});

function generateRandom(){
    return Math.floor(Math.random()*colors.length);
}