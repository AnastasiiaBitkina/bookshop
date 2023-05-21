let bookList = [];
let books = [];

fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            books = data;
            for (let i = 0; i < books.length; i+=1) {
                console.log (books[i]);
                // Создаем карточки
                const cardItem = document.createElement("div");
                cardItem.id = "card-item";
                catalog.appendChild(cardItem);
                
                //Добавляем изображние в карточку
                const pic = document.createElement("img");
                pic.className = "pic";
                pic.src = books[i].imageLink;
                cardItem.appendChild(pic);

                //Добавляем правый блок карточки
                const cardRight = document.createElement("div");
                cardRight.id = "card-right";
                cardItem.appendChild(cardRight);

                //Добавляем автора книги
                const author = document.createElement("h3");
                author.innerText = books[i].author;
                cardRight.appendChild(author);

                // Добавляем название книги 
                const title = document.createElement("p");
                title.innerText = books[i].title;
                cardRight.appendChild(title);

                //Добавляем кнопку
                const btn = document.createElement("button");
                btn.className = "btn";
                cardRight.appendChild(btn);

                //Добавляем название кнопки
                const btnName = document.createElement("p");
                btnName.innerText = "add to bag";
                btnName.className = "btn-name";
                btn.appendChild(btnName);

                //Добаляем ссылку на модальное окно
                const link = document.createElement("button");
                link.className = "link";
                link.id = i;
                cardRight.appendChild(link);

                //Добавляем название ссылки
                const linkName = document.createElement("p");
                linkName.innerText = "show more"
                linkName.className = "link-name";
                link.appendChild(linkName);

                link.addEventListener("click", function(event) {
                    showModal(i);
                });

            }
        
            console.log(books);
        });
        
function drawModal() {
     // Добавляем модальное окно
     const modal = document.createElement("div");
     modal.className = "modal";
     document.body.appendChild(modal);
     
     // Добавляем изображение книги
       const modalPic = document.createElement("img");
       modalPic.className = "modal-pic";
       modal.appendChild(modalPic);
           
}

function showModal(i) {
    const modal = document.querySelector(".modal");
    const modalPic = modal.querySelector("img");
    modalPic.src = books[i].imageLink;

    modal.style.display = "block";
}
// Добавляем заголовок и список в контейнер
const container = document.getElementById("container");

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

// Создаем каталог
const catalog = document.createElement("div");
catalog.id = "catalog";
container.appendChild(catalog);

// Создаем заголовок каталога
const catalogTitle = document.createElement("h2");
catalogTitle.innerText = "Book Catalog";
catalog.appendChild(catalogTitle);

drawModal();