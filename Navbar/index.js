const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener('click', function(){
     links.classList.toggle('show-links');
})