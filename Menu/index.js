const menu = [
  {
    id: 1,
    title: "Pancake Stack",
    img: "../public/menu/cake.jpg",
    category: "Breakfast",
    price: 6.75,
    desc: "Fluffy pancakes served with maple syrup, butter, and fresh berries."
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    category: "Lunch",
    img: "../public/menu/cheese.jpg",
    price: 8.99,
    desc: "Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and signature sauce."
  },
  {
    id: 3,
    title: "Margherita Pizza",
    category: "Dinner",
    img: "../public/menu/pizza.jpg",
    price: 12.5,
    desc: "Stone-baked pizza topped with mozzarella, fresh basil, and tomato sauce."
  },
  {
    id: 4,
    title: "Grilled Chicken Salad",
    category: "Lunch",
    img: "../public/menu/salad.jpg",
    price: 9.5,
    desc: "Fresh mixed greens topped with grilled chicken, cherry tomatoes, and vinaigrette."
  },
  {
    id: 5,
    title: "Spaghetti Alfredo",
    category: "Dinner",
    img: "../public/menu/spaghetti.jpg",
    price: 11.25,
    desc: "Creamy Alfredo pasta with parmesan cheese and garlic bread."
  },
  {
    id: 6,
    title: "Chocolate Milkshake",
    category: "Breakfast",
    img: "../public/menu/shake.jpg",
    price: 4.99,
    desc: "Rich chocolate milkshake topped with whipped cream and chocolate syrup."
  },
  {
    id: 7,
    title: "Mango Smoothie",
    category: "Dinner",
    price: 4.5,
    img: "../public/menu/mango.jpg",
    desc: "Refreshing mango smoothie blended with yogurt and honey."
  },
  {
    id: 8,
    title: "French Toast",
    category: "Breakfast",
    img: "../public/menu/toast.jpg",
    price: 7.25,
    desc: "Golden-brown French toast served with powdered sugar and maple syrup."
  },
  {
    id: 9,
    title: "Veggie Meals",
    category: "Lunch",
    img: "../public/menu/meals.jpg",
    price: 8.25,
    desc: "Rice with sambar, papads, poriyal etc."
  },
  {
    id: 10,
    title: "Grilled Salmon",
    category: "Dinner",
    img: "../public/menu/grill.jpg",
    price: 15.99,
    desc: "Perfectly grilled salmon served with steamed vegetables and mashed potatoes."
  },
  {
    id: 11,
    title: "Vanilla Milkshake",
    category: "Shakes",
    img: "../public/menu/vanilla.jpg",
    price: 5.79,
    desc: "Smooth and creamy vanilla milkshake blended with premium vanilla ice cream and topped with whipped cream."
  },
  {
    id: 12,
    title: "Strawberry Milkshake",
    category: "Shakes",
    img: "../public/menu/berry.jpg",
    price: 5.49,
    desc: "Refreshing strawberry milkshake made with fresh strawberries and vanilla ice cream."
  }
];

const section_center = document.querySelector(".section-center");
let displayMenu;

window.addEventListener("DOMContentLoaded", function(){
    showDisplayMenu(menu);
    const btnContainer = document.querySelector(".btn-container");

    const categories = menu.reduce((values, item)=> {
           if(!values.includes(item.category)){
               values.push(item.category);
           }
           return values;
    }, ["All"]);

    const categoryBtns = categories.map((category)=>{
        return `
            <button data-id= ${category} class="filter-btn">${category}</button>
        `;
    }).join("");
    
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
              let category = e.currentTarget.dataset.id;
              if(category != 'All'){
                let filteredMenu = menu.filter((item)=> item.category == category);

                showDisplayMenu(filteredMenu);
              }
              else{
                showDisplayMenu(menu);
              }
        });
    });
});

function showDisplayMenu(menu){
    displayMenu = menu.map((item)=>{
        return `
            <article class="menu-item" alt="menu-item">
                 <img src="${item.img}" class="photo" alt="menu-item">
                 <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p>${item.desc}</p>
                 </div>
            </article>
        `;
    });

    displayMenu = displayMenu.join("");
    section_center.innerHTML = displayMenu;
}