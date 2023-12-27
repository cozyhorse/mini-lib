import { getBooks } from "./fetchdata.js";

const wrapper: Element | null = document.querySelector(".wrapper");
const title = document.querySelector(".title") as HTMLElement;
const infoBox = document.querySelector(".info") as HTMLDivElement;
const closeBtn = document.querySelector(".close") as HTMLButtonElement;
const author = document.querySelector(".author") as HTMLElement;
const plot = document.querySelector(".plot") as HTMLElement;
const audience = document.querySelector(".audience") as HTMLElement;
const pages = document.querySelector(".pages") as HTMLElement;
const firstPublished = document.querySelector(".first-published") as HTMLElement;
const publisher = document.querySelector(".publisher") as HTMLElement;
const readNowBtn = document.querySelector(".readnow") as HTMLButtonElement;
const bookcoverTitle = document.querySelector(".bookcover-title") as HTMLElement;
const bookcoverAuthor = document.querySelector(".bookcover-author") as HTMLElement;

let bookNumber: number = 1;
const viewBooks = await getBooks();

const printBooks = (): void => {
  for (const [index, item] of viewBooks.entries()) {
    const book: HTMLDivElement = document.createElement("div");
    book.classList.add(`book-${bookNumber++}`);
    book.classList.add(`book`);
    book.append(item.title);
    wrapper?.append(book);

    book.addEventListener("click", () => {
      if (!book.classList.contains("active")) {
        book.classList.add("active");
        book.style.background = `${item.color}`;
      } else {
        book.classList.remove("active");
        book.style.background = "";
      }
      infoBox.classList.remove("hide");
      printData(item);
    });
  }
};

const printData = (item: any): void => {
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
