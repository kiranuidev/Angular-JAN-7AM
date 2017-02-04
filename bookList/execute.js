(function () {
    var elements = {};
    elements.bookId = document.getElementById("txtBookId");
    elements.bookName = document.getElementById("txtBookName");
    elements.bookAuthor = document.getElementById("txtBookAuthor");
    elements.btnAddBook =
        document.getElementById("btnAdd");

    function init() {
        bindEvents();
    }

    function bindEvents() {
        elements.btnAddBook.addEventListener("click", addBook);
        elements.btnAddBook.addEventListener("mouseover", changeButtonColor);
        elements.bookId.addEventListener("keypress", numbersOnly);
        elements.bookAuthor.addEventListener("keypress", alphabetsOnly);
    }

    function numbersOnly(evt) {
        console.log("keys pressed");
        console.log(evt);
        if (evt.charCode >= 48 && evt.charCode <= 57) {

        }
        else{
            evt.preventDefault();
        }
    }

    function alphabetsOnly(evt) {
        console.log("keys pressed");
    }

    function changeButtonColor(evt) {
        console.log("changing Color");
    }

    function addBook(evt) {
        console.log("Adding.......")
    }

    init();

})();
