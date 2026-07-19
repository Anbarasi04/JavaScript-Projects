const decBtn = document.getElementById("dec");
const incBtn = document.getElementById("inc");
const resBtn = document.getElementById("reset");
const btn = document.getElementById('btn');
let count = 0;
const cntVal = document.getElementById("cnt");

decBtn.addEventListener('click', function(){
     count--;
     cntVal.textContent = count;
});

incBtn.addEventListener('click', function(){
     count++;
     cntVal.textContent = count;
});

resBtn.addEventListener('click', function(){
     count = 0;
     cntVal.textContent = count;
});
