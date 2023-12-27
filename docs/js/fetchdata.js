export const getBooks = async () => {
    const response = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    const data = await response.json();
    console.log("data", data);
    return data;
};
