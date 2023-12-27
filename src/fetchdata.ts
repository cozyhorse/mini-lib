import { Book } from "./bookinterface";

export const getBooks = async ():Promise<Book[]> => {
    const response: Response = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    const data: Book[] = await response.json();
    console.log("data", data);
    return data;

}