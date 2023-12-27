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
const bookcoverTitle = document.querySelector(".book-cover-title");
const bookcoverAuthor = document.querySelector(".book-cover-author");
const descriptionBox = document.querySelector(".description-box");
const bookCover = document.querySelector(".book-cover");
const fillerspace = document.querySelector(".fillerspace");
let bookNumber = 1;
const viewBooks = await getBooks();
const printBooks = () => {
    for (const [index, item] of viewBooks.entries()) {
        const book = document.createElement("div");
        book.classList.add(`book-${bookNumber++}`);
        book.classList.add(`book`);
        book.append(item.title);
        book.style.background = item.color;
        wrapper?.append(book);
        book.addEventListener("click", () => {
            if (!book.classList.contains("active")) {
                book.classList.add("active");
                book.style.background = `${item.color}`;
            }
            wrapper.classList.add("hide");
            infoBox.classList.remove("hide");
            printData(item);
        });
    }
};
const printData = (item) => {
    fillerspace.style.background = `${item.color}`;
    bookCover.style.background = `${item.color}F9`;
    title.textContent = item.title;
    author.textContent = item.author;
    plot.textContent = item.plot;
    audience.textContent = item.audience;
    firstPublished.textContent = item.year.toString();
    publisher.textContent = item.publisher;
    bookcoverTitle.textContent = item.title;
    bookcoverAuthor.textContent = item.author;
    if (item.pages == null) {
        pages.textContent = "No available data";
    }
    else {
        pages.textContent = item.pages.toString();
    }
};
closeBtn.addEventListener("click", () => {
    const book = document.querySelector(".book.active");
    document.querySelector(".book.active")?.classList.remove("active");
    book.style.background = "";
    infoBox.classList.add("hide");
    wrapper.classList.remove("hide");
});
printBooks();
