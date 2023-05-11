
// Создаем заголовок h1
var heading = document.createElement("h1");
heading.innerText = "Bookshop";
heading.classList.add("title");

// Создаем список ul
var list = document.createElement("ul");

// Добавляем элементы li в список
var item1 = document.createElement("li");
item1.innerText = "Книга 1";
list.appendChild(item1);

var item2 = document.createElement("li");
item2.innerText = "Книга 2";
list.appendChild(item2);

var item3 = document.createElement("li");
item3.innerText = "Книга 3";
list.appendChild(item3);

var item4 = document.createElement("li");
item4.innerText = "Книга 4";
list.appendChild(item4);

var item5 = document.createElement("li");
item5.innerText = "Книга 5";
list.appendChild(item5);

// Добавляем заголовок и список в контейнер
var container = document.getElementById("container");
container.appendChild(heading);
container.appendChild(list);


