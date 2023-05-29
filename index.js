let bag = [];
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
                cardItem.className = "card-item";
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

                btn.addEventListener("click", function(event){
                    addToBag(i);
                });

            }
        
            console.log(books);
        });
        
function drawModal() {
     // Добавляем модальное окно
     const modal = document.createElement("div");
     modal.className = "modal";
     document.body.appendChild(modal);

     // Добавляем автора книги
     const modalBookAuthor = document.createElement("h3");
     modalBookAuthor.className = "modal-book-author";
     modal.appendChild(modalBookAuthor);

     // Добавляем название книги
     const modalBookName = document.createElement("h4");
     modalBookName.className = "modal-book-name";
     modal.appendChild(modalBookName);

     // Добавляем описание книги
     const modalBookDescription = document.createElement("p");
     modalBookDescription.className = "modal-book-description";
     modal.appendChild(modalBookDescription);
     
     // Добавляем изображение книги
       /*const modalPic = document.createElement("img");
       modalPic.className = "modal-pic";
       modal.appendChild(modalPic);*/
           
}

function showModal(i) {
    const modal = document.querySelector(".modal");

    const modalBookAuthor = document.querySelector(".modal-book-author");
    modalBookAuthor.innerText = books[i].author;

    const modalBookName = modal.querySelector(".modal-book-name");
    modalBookName.innerText = books[i].title;

    const modalBookDescription = modal.querySelector(".modal-book-description");
    modalBookDescription.innerText = books[i].description;

    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");

    modal.style.display = "none";
    overlay.style.display = "none";
}

function addToBag(i) {
    bag.push(books[i]);

    function drawBag() {
        
            console.log(bag[bag.length-1]);

            // Отрисровать карточки

            // Создаем карточки
            const cardItem = document.createElement("div");
            cardItem.className = "card-item";
            basket.appendChild(cardItem);
            
            //Добавляем изображние в карточку
            const pic = document.createElement("img");
            pic.className = "pic";
            pic.src = bag[bag.length-1].imageLink;
            cardItem.appendChild(pic);

            //Добавляем правый блок карточки
            const cardRight = document.createElement("div");
            cardRight.id = "card-right";
            cardItem.appendChild(cardRight);

            //Добавляем автора книги
            const author = document.createElement("h3");
            author.innerText = bag[bag.length-1].author;
            cardRight.appendChild(author);

            // Добавляем название книги 
            const title = document.createElement("p");
            title.innerText = bag[bag.length-1].title;
            cardRight.appendChild(title);

            // отрисовать крестик

            const cross = document.createElement("button");
            cross.innerText = "remove";
            cardRight.appendChild(cross);

            //событие на крестик

            cross.addEventListener("click", function(event) {
                removeFromBag(event,bag.length-1);
            })
    }

    drawBag();
    sumPrice();
}

function removeFromBag(event,i) {
   bag.splice(i,1);

   console.log(event);

   const target = event.target;
   const closest = target.closest(".card-item");

   console.log(closest);

   basket.removeChild(closest);

   sumPrice();
}

function sumPrice() {
    let total = 0;
    for (let i = 0; i < bag.length; i+=1) {
        total+=bag[i].price;
    }

    console.log(total);
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

// Создаем div
const items = document.createElement("div");
items.className = "items";
container.appendChild(items);

// Создаем каталог
const catalog = document.createElement("div");
catalog.id = "catalog";
items.appendChild(catalog);

// Создаем заголовок каталога
const catalogTitle = document.createElement("h2");
catalogTitle.innerText = "Book Catalog";
catalog.appendChild(catalogTitle);

// Создаем div для корзины
const basket = document.createElement("div");
basket.className = "basket";
items.appendChild(basket);

// Создаем заголовок для корзины
const basketTitle = document.createElement("h2");
basketTitle.innerText = "Bag";
basketTitle.className = "basket-title";
basket.appendChild(basketTitle);


// создаем фон
const overlay = document.createElement("div");
overlay.classList.add("modal-overlay");
document.body.appendChild(overlay);

// Функция для закрытия модального окна

// Добавляем обработчик события при клике на фон
  overlay.addEventListener("click", closeModal);

drawModal();