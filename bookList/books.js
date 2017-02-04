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
         var bookIndex=0;
        var isBookExisting =false;
        for (var i = 0; i < booksLength; i++) {
            if (bookList[i].title == item.title && bookList[i].author == item.author &&
                bookList[i].id == item.id) {
               isBookExisting=true;
            }
        };
        if(!isBookExisting){
            bookList.push(item);
        }
    };

    var deleteBook = function (item) {
        var booksLength =bookList.length;
        var bookIndex=0;
        var isBookExisting =false;
        for (var i = 0; i < booksLength; i++) {
            if (bookList[i].title == item.title && bookList[i].author == item.author &&
                bookList[i].id == item.id) {
               isBookExisting=true;
                bookIndex=i;
            }
        };
        if(isBookExisting){
            console.log(true);
            console.log(bookIndex);
            bookList.splice(1,1);
            console.log(bookList);
        }

    };

    /*addBook({
        id: 102,
        author: "bhumit",
        title: "Faq"
    });
    console.log(getBooks());
    deleteBook({id: "101",author: "Ravi",title:"Nodjes"  });*/
    //console.log(getBooks());

})(window);
