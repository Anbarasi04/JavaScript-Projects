const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", ()=>{
    console.log("click");
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("open-modal");
})