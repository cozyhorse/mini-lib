import { getBooks } from "./fetchdata.js";
let bookNumber: number = 1;

const wrapper: Element | null = document.querySelector(".wrapper");
const title = document.querySelector(".title") as HTMLElement;
const infoBox = document.querySelector(".info") as HTMLDivElement;
const viewBooks = await getBooks();
console.log("books", viewBooks);

const printBooks = ():void => {
    for (const [index, item] of viewBooks.entries() ) {
        const book: HTMLDivElement = document.createElement("div");
        book.classList.add(`book-${bookNumber++}`);
        book.classList.add(`book`);
        book.append(item.title);
        wrapper?.append(book);

        book.addEventListener("click", () => {
            if(!book.classList.contains("active")){
                book.classList.add("active");
                book.style.background = `${item.color}`;
                
            }else{
                book.classList.remove("active");
                book.style.background = "";
            }

            printData(item);
            
        })

        
    }
}

const printData = (item:any):void => {
    infoBox.style.background = `${item.color}`
    title.textContent = item.title;


}

printBooks();