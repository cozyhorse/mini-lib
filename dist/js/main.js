import { getBooks } from "./fetchdata.js";
let bookNumber = 1;
const wrapper = document.querySelector(".wrapper");
const title = document.querySelector(".title");
const infoBox = document.querySelector(".info");
const viewBooks = await getBooks();
console.log("books", viewBooks);
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
            printData(item);
        });
    }
};
const printData = (item) => {
    infoBox.style.background = `${item.color}`;
    title.textContent = item.title;
};
printBooks();
