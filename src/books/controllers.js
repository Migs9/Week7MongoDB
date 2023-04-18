const Book = require("./model");

const getAllbooks = async (req, res) => {
    try {
        const books = await Book.find({});

        res.status(200).json({message: "success", books: books});
    } catch (error) {
        console.log(error);
    }
};


const addBook = async (req, res) => {
    try {
        const newBook = await Book.create({ //req.body can be used in the brackets like this Book.create(req.body). what this means is that
                                        // as long as the request has the same fields as the fields on the database it'll use that template
                                        // for example here the 3 fields are author, title and genre, as long those are the fields it'll work
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        });    

        res.status(201).json({message: "entry added", books: newBook});

    } catch (error) {
        console.log(error);
    }
};

const updateBookAuthor = async (req, res) => {
    try {  
        const updatedBook = await Book.findOneAndUpdate(
          { title: req.body.title },  // filter to use
          { author: req.body.author }, // field to update
          { new: true }
          );
    
        res.status(201).json({message: "success", books: updatedBook});
      } catch (error) {
        console.log(error);
      }
};


const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ 
          title: req.body.title   //this should make it so the title is the only important parameter of the request
          });

    
        res.status(201).json({message: "success", books: deletedBook});
    
      } catch (error) {
        console.log(error);
      }
};

const updateDynBookAuthor = async (req, res) => {
    try {  
        const updatedBook = await Book.findOneAndUpdate(
          { title: req.body.title }, // field to search
          { [req.body.field]: req.body.value }, // value to update, you use 2 lines, field : (the one to change) //// value : (the new value)
          { new: true }
          );
        
        res.status(201).json({message: "success", books: updatedBook});
      } catch (error) {
        console.log(error);
      }
};

const deleteAll = async (req, res) => {
    try {  
        await Book.deleteMany({}); // wipe everything
        res.status(201).json({message: "success", books: []});
      } catch (error) {
        console.log(error);
      }
};

const deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBook = await Book.findOneAndDelete({ 
          _id: id   // no need to know anything about the entry other than the entry itself
          });
        res.status(201).json({message: "entry deleted", books: deletedBook});
      } catch (error) {
        console.log(error);
      }
};

const findBookByTitle = async (req, res) => {
    try {
      const book = await Book.findOne({ title: req.params.title });
      res.status(201).json({ message: "success", book: book });
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    getAllbooks,
    addBook,
    updateBookAuthor,
    deleteBook,
    updateDynBookAuthor,
    deleteAll,
    deleteOne,
    findBookByTitle,
};