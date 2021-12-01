class UI
{
    static
    displayBooks()
    {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }
}