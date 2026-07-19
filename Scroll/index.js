const linksContainer = document.querySelector(".links-container");
const date = document.getElementById('date');
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//Set date
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", () => {
    //linksContainer.classList.toggle("show-links");
    const  containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});


const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

//scroll event
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
         navbar.classList.add('fixed-nav');
    } 
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
});

//navigate to specific section
const scrollLinks = document.querySelectorAll(".scroll-link");
console.log("scroll",scrollLinks);
scrollLinks.forEach(function(link){
     link.addEventListener("click", (e)=>{
          e.preventDefault();
          const id = e.currentTarget.getAttribute('href').slice(1);
          const element = document.getElementById(id);
          const navHeight = navbar.getBoundingClientRect().height;
          const containerHeight = linksContainer.getBoundingClientRect().height;
          const fixedNav = navbar.classList.contains('fixed-nav');
          let position = element.offsetTop - navHeight;
          if(!fixedNav){
            position = position - navHeight;
          }
          if(navHeight > 82){
              position += containerHeight;
          }
          window.scrollTo({
            left: 0,
            top: position
          });
          linksContainer.style.height = 0;

     });
});
