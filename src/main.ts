import { getBooks } from "./fetchdata.js";
import { Book } from "./bookinterface.js";

const wrapper = document.querySelector(".bookshelf") as HTMLDivElement;
const title = document.querySelector(".title") as HTMLElement;
const infoBox = document.querySelector(".info") as HTMLDivElement;
const closeBtn = document.querySelector(".close") as HTMLButtonElement;
const author = document.querySelector(".author") as HTMLElement;
const plot = document.querySelector(".plot") as HTMLElement;
const audience = document.querySelector(".audience") as HTMLElement;
const pages = document.querySelector(".pages") as HTMLElement;
const firstPublished = document.querySelector(".first-published") as HTMLElement;
const publisher = document.querySelector(".publisher") as HTMLElement;
const bookcoverTitle = document.querySelector(".book-cover-title") as HTMLElement;
const bookcoverAuthor = document.querySelector(".book-cover-author") as HTMLElement;
const bookCover = document.querySelector(".book-cover") as HTMLElement;
const fillerspace = document.querySelector(".fillerspace") as HTMLElement;
const inputQuery = document.querySelector(".query") as HTMLInputElement;
const searchfield = document.querySelector(".searchfield") as HTMLDivElement;

let bookNumber: number = 1;
const viewBooks = await getBooks();

const renderBooks = (input: string = ""): void => {
  const inputCleanup = input.trim().toLowerCase();
  const filteredBook = viewBooks.filter((book) => {
    const foundBook = book.title.toLowerCase().includes(inputCleanup);
    return foundBook;
  });

  filteredBook.forEach((item) => {
    console.log("item", item);
    const book: HTMLDivElement = document.createElement("div");
    book.classList.add(`book-${bookNumber++}`);
    book.classList.add(`book`);
    book.append(item.title);
    book.style.background = item.color
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
      },250)
      wrapper.classList.add("hide");
    });
  });

};

// Print info to HTML
const printData = (item: Book): void => {
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
    pages.textContent = "Unknown";
  } else {
    pages.textContent = item.pages.toString();
  }
};
//Close button.. Closing "info window"
closeBtn.addEventListener("click", (): void => {
  const book = document.querySelector(".book.active") as HTMLDivElement;
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