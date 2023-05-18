let bookList = [];


fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(books => {
            for (let i = 0; i < books.length; i+=1) {
                console.log (books[i]);
                const text = document.createElement("p");
                text.innerText = books[i].title;
                container.appendChild(text);
            }
            console.log(books);
        });



// Создаем список ul
/*var list = document.createElement("ul");

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
list.appendChild(item5);*/

// Добавляем заголовок и список в контейнер
const container = document.getElementById("container");
/*container.appendChild(heading)
container.appendChild(list);*/


// Создаем header
const header = document.createElement("div");
header.id = "header";
container.appendChild(header);

// Создаем заглавную картинку 
const headerPic = document.createElement("img");
headerPic.id = "header-pic";
headerPic.src = "headerPic.jpg";
header.appendChild(headerPic);

// Создаем заголовок h1
const heading = document.createElement("h1");
heading.innerText = "Welcome to amazing bookshop!";
heading.id = 'heading';
header.appendChild(heading);
