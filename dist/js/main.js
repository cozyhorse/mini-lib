import { getBooks } from "./fetchdata.js";
const wrapper = document.querySelector(".wrapper");
const title = document.querySelector(".title");
const infoBox = document.querySelector(".info");
const closeBtn = document.querySelector(".close");
const author = document.querySelector(".author");
const plot = document.querySelector(".plot");
const audience = document.querySelector(".audience");
const pages = document.querySelector(".pages");
const firstPublished = document.querySelector(".first-published");
const publisher = document.querySelector(".publisher");
const readNowBtn = document.querySelector(".readnow");
const bookcoverTitle = document.querySelector(".bookcover-title");
const bookcoverAuthor = document.querySelector(".bookcover-author");
let bookNumber = 1;
const viewBooks = await getBooks();
const printBooks = () => {
    for (const [index, item] of viewBooks.entries()) {
        const book = document.createElement("div");
        book.classList.add(`book-${bookNumber++}`);
        book.classList.add(`book`);
        book.append(item.title);
        wrapper?.append(book);
        book.addEventListener("click", () => {
            if (!book.classList.contains("active")) {
                book.classList.add("active");
                book.style.background = `${item.color}`;
            }
            else {
                book.classList.remove("active");
                book.style.background = "";
            }
            infoBox.classList.remove("hide");
            printData(item);
        });
    }
};
const printData = (item) => {
    infoBox.style.background = `${item.color}`;
    title.textContent = item.title;
    author.textContent = item.author;
    plot.textContent = item.plot;
    audience.textContent = item.audience;
    pages.textContent = item.pages;
    firstPublished.textContent = item.year;
    publisher.textContent = item.publisher;
    bookcoverTitle.textContent = item.title;
    bookcoverAuthor.textContent = item.author;
};
closeBtn.addEventListener("click", () => {
    infoBox.classList.add("hide");
});
printBooks();
