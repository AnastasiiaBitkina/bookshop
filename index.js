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
                cardItem.id = i;
                cardItem.draggable = true;
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
                link.innerText = "show more";
                link.className = "link";
                link.id = i;
                cardRight.appendChild(link);

                link.addEventListener("click", function(event) {
                    showModal(i);
                });

                btn.addEventListener("click", function(event){
                    addToBag(i);
                });

                cardItem.addEventListener("dragstart", function(event){
                    
                    const id = event.target.id;

                    event.dataTransfer.setData("card-data", id);
                    event.dataTransfer.getData("card-data");

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

     // Добавляем кнопку закрытия
     const closeBtn = document.createElement("button");
     closeBtn.innerText = "close";
     closeBtn.className = "modal-close-btn";
     modal.appendChild(closeBtn);   
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
            cross.className = "remove-btn";
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
    totalText.innerText = "Total: " + total;
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

// Убираем стаднартное поведение браузера для корзины
basket.addEventListener ("dragover", function(event){
    event.preventDefault();
});

// Добавляем обработчик собвтия для корзины
basket.addEventListener("drop", function(event){
    const id = event.dataTransfer.getData("card-data");
    addToBag(id);
});

// Создаем заголовок для корзины
const basketTitle = document.createElement("h2");
basketTitle.innerText = "Bag";
basketTitle.className = "basket-title";
basket.appendChild(basketTitle);

// Созадаем счетчик суммы

const totalText = document.createElement("p");
totalText.className = "total-text";
basket.appendChild(totalText);

// Cоздаем кнопку для заказа
const orderBtn = document.createElement("button");
orderBtn.className = "order-btn";
orderBtn.innerText = "Confirm order";
basket.appendChild(orderBtn);

// Создаем фон
const overlay = document.createElement("div");
overlay.classList.add("modal-overlay");
document.body.appendChild(overlay);

// Функция для закрытия модального окна

// Добавляем обработчик события при клике на фон
overlay.addEventListener("click", closeModal);

drawModal();

// Добавляем обработчик события при клике на кнопку закрытия
const closeBtn = document.querySelector(".modal-close-btn");
closeBtn.addEventListener("click", closeModal);

// Создаем форму
function drawForm() {
    const orderFormContainer = document.createElement("div");
    orderFormContainer.className = "order-form-container";
    document.body.appendChild(orderFormContainer);
    // Создаем форму
    const form = document.createElement("form");
    form.id = "orderForm";
    orderFormContainer.appendChild(form);

    // Создаем и добавляем элементы формы
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.required = true;
    form.appendChild(emailInput);

    const addressLabel = document.createElement("label");
    addressLabel.textContent = "Address:";
    form.appendChild(addressLabel);

    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.required = true;
    form.appendChild(addressInput);

    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone:";
    form.appendChild(phoneLabel);

    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.required = true;
    form.appendChild(phoneInput);

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Order";
    submitBtn.className = "submit-btn"
    form.appendChild(submitBtn);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Отменяем отправку формы
  
        // Получаем значения полей формы
        const name = nameInput.value;
        const email = emailInput.value;
        const address = addressInput.value;
        const phone = phoneInput.value;
  
        // Отправляем данные на сервер 
        fetch("/submit-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            address: address,
            phone: phone
          })
        })
        .then(function(response) {
          if (response.ok) {
            alert("Your order has been successfully sent!");
            
          } else {
            alert("Error sending order. Please try again.");
          }
        })
        .catch(function(error) {
          alert("Error submitting order: " + error.message);
        });
      });
      overlay.style.display = "block";
      orderFormContainer.style.display = "block";
};

// Добавляем обарботчик события кнопку заказа 

orderBtn.addEventListener("click", function () {
    drawForm();
});
function closeForm() {
    const orderFormContainer = document.querySelector(".order-form-container");
    const overlay = document.querySelector(".modal-overlay");

    orderFormContainer.style.display = "none";
    overlay.style.display = "none";
}

// Добавляем обработчик события на фон 
overlay.addEventListener("click", function (){
    closeForm ();
});
