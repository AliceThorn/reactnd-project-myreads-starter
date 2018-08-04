# MyReads Udacity Project 7

The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

Project and  all project dependencies  was installed with `npm install`
Development server started with `npm start`

MAIN PAGE SPECIFICATIONS
The main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?

The main page shows 3 shelves for books, and each book is shown on the correct shelf.

The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

When the browser is refreshed, the same information is displayed on the page.

SEARCH PAGE SPECIFICATIONS
The search page has a search input field.
a) As the user types into the search field, books that match the query are displayed on the page.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
e) The user is able to search for multiple words, such as “artificial intelligence.”

Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

ROUTING

The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s
