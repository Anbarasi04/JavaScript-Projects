const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove('show-sidebar');
})

toggleBtn.addEventListener("click", ()=>{
    console.log("Called");
    sidebar.classList.toggle('show-sidebar');
})