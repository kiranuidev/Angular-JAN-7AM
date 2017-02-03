(function () {

    window.books = {};

    var bookList = [
        {
            id: "100",
            author: "Kiran",
            title: "Angularjs"
        },
        {
            id: "101",
            author: "Ravi",
            title: "Nodjes"
        }];
    var getBooks = function () {
        return bookList;
    };

    var addBook = function (item) {
        var booksLength =bookList.length;
        for (var i = 0; i <booksLength ; i++) {
            if (
                bookList[i].title != item.title && bookList[i].author != item.author &&
                bookList[i].id != item.id)
            {
                bookList.push(item);
            }
        }
    };

    var deleteBook = function (item) {
        var booksLength =bookList.length;
        var isBookExisting =false;
        for (var i = 0; i < booksLength; i++) {
            if (bookList[i].title == item.title && bookList[i].author == item.author &&
                bookList[i].id == item.id) {
               isBookExisting=true;
            }
        };
        if(isBookExisting){
            console.log(true);
        }

    };

    addBook({
        id: 102,
        author: "bhumit",
        title: "Faq"
    });
    console.log(getBooks());
    deleteBook({id: "101",author: "Ravi",title:"Nodjes"  });
    //console.log(getBooks());

})(window);
