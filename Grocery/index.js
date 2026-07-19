const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id, value);
        displayAlert("item added to the list", "success");
        container.classList.add("show-container");
        addToLocalStorage(id, value);
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("item updated", "success");
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    else{
        displayAlert("please enter value", "danger");
    }
}

function clearItems(){
     const items = document.querySelectorAll(".grocery-item");
     if(items.length > 0){
        items.forEach((item)=>{
             list.removeChild(item);
        });
     }
     container.classList.remove("show-container");
     displayAlert("empty list", "danger");
     localStorage.removeItem('list');
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function addToLocalStorage(id, value){
      const grocery = { id, value };
      let items = getLocalStorage();
      items.push(grocery);
      localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}


function removeFromLocalStorage(id){
      let items = getLocalStorage();
      items = items.filter((item)=>{
           if(item.id !== id){
               return item;
           }
      }); 
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value){
    console.log("val:", id);
    let items = getLocalStorage();
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value;
            console.log("iten:", item);
        }   
        return item;
    });
    console.log("new:", items);
    localStorage.setItem('list', JSON.stringify(items));
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = id;
    submitBtn.textContent = 'Edit';
}

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    const id = element.dataset.id;
    
    if(list.children.length === 0){
         container.classList.remove("show-container");
    }
    setBackToDefault();
    displayAlert("item removed", "success");
    removeFromLocalStorage(id);
}

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}

function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach((item) => {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value){
   const element = document.createElement('article');
    element.classList.add("grocery-item");

    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                            <button class="edit-btn" type="button"><i class="fa fa-edit"></i></button>
                            <button class="del-btn" type="button"><i class="fa fa-trash"></i></button>
                    </div>`;

    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    const deleteBtn = element.querySelector(".del-btn");
    deleteBtn.addEventListener("click", deleteItem);

    list.appendChild(element);
}

window.addEventListener("DOMContentLoaded", setupItems);