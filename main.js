"use strict";


const groceryList = document.querySelector('.js_list');
const userInput = document.querySelector('.js_input');
const btnAdd = document.querySelector('.js_btn');

// button add
btnAdd.onclick = function () {
let newItem = "- " + userInput.value;
userInput.value = " ";

userInput.addEventListener("keyup", function(e) {
if (e.code === 'Enter') {
    btnAdd.click();
   }
  });

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

}








/* которое работало в другой программе

<h1 id="list_name">Grocery List</h1>

<ul id="grocery_list">
	<li>
		<input type="text" id="grocery_list_input"/>
		<button type="submit" id="add_to_list">Add to list</button>
	</li>
</ul>


let groceryList = document.querySelector('#grocery_list');
const addToListButton = document.querySelector('#add_to_list');
const groceryListInput = document.querySelector("#grocery_list_input");
let listName = document.querySelector('#list_name');



let addToList = () => {
	if (groceryListInput.value !== '') {
		let li = document.createElement('li');
		li.textContent = groceryListInput.value;
		groceryList.appendChild(li);
		groceryListInput.value = '';
	}
}

addToListButton.addEventListener('click', ()=>{
	addToList();
})

groceryListInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      	addToList();
    }
});

*/





/*
const groceries = document.getElementsByClassName("groceries")[0];
const btnReset = document.getElementById("btnReset");
const userInput = document.getElementById("userInput");
const allItems = document.getElementById("allItems");

btnReset.addEventListener("click", function() {
    allItems.innerHTML = " ";
})

userInput.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
    addItem();
})

function addItem() {
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;
}
*/

/*
const btnReset = document.querySelector(".js_btn");
const listOfItems = document.querySelector(".js_list");
const userInput = document.querySelector(".js_input");
const glocery = document.querySelector(".js_glocery")[0];

btnReset.addEventListener("click", function(){
    listOfItems.innerHTML = "";
});

userInput.addEventListener("keydown", function(event){
if(event.key === "Enter")
addItem();
});

function addItem() {
   let h2 = document.createElement("h2");
   h2.innerHTML = "- " + userInput.value;
}
*/