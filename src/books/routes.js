const {Router} = require("express");
const { getAllbooks, addBook, updateBookAuthor, deleteBook, updateDynBookAuthor, deleteAll, deleteOne, findBookByTitle } = require("./controllers");
const bookRouter = Router();

const Book = require("./model");


bookRouter.get("/books/getallbooks", getAllbooks);

bookRouter.post("/books/addbook", addBook);

bookRouter.put("/books/updatebookauthor", updateBookAuthor);

bookRouter.delete('/books/deletebook', deleteBook);

module.exports = bookRouter;



// ----- Stretch - - - - Dinamic updates to any field - - - - - - - - - - - - - - - - - - - - -

bookRouter.put("/books/updatebookauthor", updateDynBookAuthor);

// ----- Stretch - - - - Delete all  - - - - - - - - - - - - - - - - - - - - -

bookRouter.delete("/books/deleteall", deleteAll );

// ----- Stretch - - - - Delete one by id  - - - - - - - - - - - - - - - - - - - - -

bookRouter.delete("/books/:id", deleteOne );

// ----- Stretch - - - - Find book by title  - - - - - - - - - - - - - - - - - - - - -

bookRouter.get("/books/:title", findBookByTitle);

