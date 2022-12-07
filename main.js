"use strict";


const groceryList = document.querySelector('.js_list');
const userInput = document.querySelector('.js_input');
const btnAdd = document.querySelector('.js_btn');

userInput.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        btnAdd.onclick();
       }
      });

// button add
btnAdd.onclick = function () {
let newItem = "- " + userInput.value;
userInput.value = " ";

let itemList = document.createElement('li');
let itemText = document.createElement('span');
let btnDelete = document.createElement('button');

itemList.appendChild(itemText);
itemText.textContent = newItem;

itemList.appendChild(btnDelete);
btnDelete.textContent = "Delete";

groceryList.appendChild(itemList);

itemText.addEventListener("click", function() {
    itemText.style.textDecoration = "line-through";  
})

btnDelete.onclick = function() {
    groceryList.removeChild(itemList); 
}

userInput.focus();
};



