const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const givewaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
givewaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time
const futureTime = futureDate.getTime();
function getRemainingTime() {
     const today = new Date().getTime();
     const t = futureTime - today;
     const oneDay = 24*60*60*1000;
     const oneHour = 60*60*1000;
     const oneMin = 60*1000;
     
     let days = Math.floor(t / oneDay);
     let hours = Math.floor((t % oneDay) / oneHour);
     let minutes = Math.floor((t % oneHour) / oneMin);
     let secs = Math.floor((t % oneMin) / 1000)   
    
     const values =  [days, hours, minutes, secs];

     function format(item){
         if(item < 10){
           return (item = `0${item}`);
         }
         return item;
     }

     items.forEach(function(item, index){
          item.textContent = format(values[index]);
     });

     if(t < 0){
         clearInterval(countdown);
         deadline.innerHTML = `<h4 class="expired">Sorry, this giveway has expired</h4>`;
     }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();