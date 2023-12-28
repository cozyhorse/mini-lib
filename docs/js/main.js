import { getBooks } from "./fetchdata.js";
import { gradient } from "./gradient.js";
const wrapper = document.querySelector(".bookshelf");
const title = document.querySelector(".title");
const infoBox = document.querySelector(".info");
const closeBtn = document.querySelector(".close");
const author = document.querySelector(".author");
const plot = document.querySelector(".plot");
const audience = document.querySelector(".audience");
const pages = document.querySelector(".pages");
const firstPublished = document.querySelector(".first-published");
const publisher = document.querySelector(".publisher");
const bookcoverTitle = document.querySelector(".book-cover-title");
const bookcoverAuthor = document.querySelector(".book-cover-author");
const bookCover = document.querySelector(".book-cover");
const fillerspace = document.querySelector(".fillerspace");
const inputQuery = document.querySelector(".query");
const searchfield = document.querySelector(".searchfield");
let bookNumber = 1;
const viewBooks = await getBooks();
const renderBooks = (input = "") => {
    const inputCleanup = input.trim().toLowerCase();
    const filteredBook = viewBooks.filter((book) => {
        const foundBook = book.title.toLowerCase().includes(inputCleanup);
        return foundBook;
    });
    filteredBook.forEach((item) => {
        console.log("item", item);
        const book = document.createElement("div");
        book.classList.add(`book-${bookNumber++}`);
        book.classList.add(`book`);
        book.append(item.title);
        //book.style.background = item.color
        gradient(item.color, book);
        wrapper?.append(book);
        //Make all books "clickable"
        book.addEventListener("click", () => {
            setTimeout(() => {
                if (!book.classList.contains("active")) {
                    book.classList.add("active");
                    book.style.background = `${item.color}`;
                }
                searchfield.classList.add("hide");
                infoBox.classList.remove("hide");
                printData(item);
            }, 250);
            wrapper.classList.add("hide");
        });
    });
};
// Print info to HTML
const printData = (item) => {
    gradient(item.color, bookCover);
    title.textContent = item.title;
    author.textContent = item.author;
    plot.textContent = item.plot;
    audience.textContent = item.audience;
    firstPublished.textContent = item.year.toString();
    publisher.textContent = item.publisher;
    bookcoverTitle.textContent = item.title;
    bookcoverAuthor.textContent = item.author;
    if (item.pages == null) {
        pages.textContent = "Unknown";
    }
    else {
        pages.textContent = item.pages.toString();
    }
};
//Close button.. Closing "info window"
closeBtn.addEventListener("click", () => {
    const book = document.querySelector(".book.active");
    document.querySelector(".book.active")?.classList.remove("active");
    book.style.background = "";
    infoBox.classList.add("hide");
    wrapper.classList.remove("hide");
    searchfield.classList.remove("hide");
});
//Search input
inputQuery.addEventListener("keyup", () => {
    wrapper.innerHTML = "";
    renderBooks(inputQuery.value);
});
renderBooks();
