var book = require('./bookbyid');


test("to use bookbyid .not.toBeNull() with an object",()=>{
    var bookObj = book.returnBookById(5);
    var bookObj2 = book.returnBookById(50);
    console.log("Returned data from the function is "+ JSON.stringify(bookObj));
    console.log("Returned data from the function is "+ JSON.stringify(bookObj2));
    expect(bookObj).not.toBeNull();
    expect(bookObj2).toBeNull();
})