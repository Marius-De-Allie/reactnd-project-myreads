# MyReads Project

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [App Structure](#Application_Structure)
- [Backend Server](#Backend_Server)
- [Contributing](#contributing)

## Introduction

This is project is a book tracking web application developed using the React library, that allows the user to search through a list of books and add a number of books to 3 different Bookshelves:
1. Current Reading book shelf
2. Want to Read book shelf
3. Previously Read book shelf

## Instructions

  ### How to start the MyReads React application
  - Application may be downloaded or cloned (git clone https://github.com/Marius-De-Allie/reactnd-project-myreads)from [my GitHub repository](https://github.com/Marius-De-Allie/reactnd-project-myreads)
  - Once downloaded or cloned via git clone terminal command
  - Run `npm install` via terminal, to download all dependencies for the application.
  - Run `npm start` via terminal, to launch application's dev server. This will result in a new tab being opened on your defailt browser and you should be presented with the Myreads app Main (Home) page showing all three book shelfs and any books currently on each shelf.
  
  ### How to use MyReads React application.
  #### App Main Page.
  - On Main Page you may click on the drop down arrow located at the bottom right of each book image to switch that particular book between one of the 3 book shelfs (Currently Reading, Want to Read, Read).
  - Upon changing book shelf of currently selected book, book will immediately relocate on the main page to that specific shelf location.
  - If a shelf value of none is selected the book will be removed from the application main page.
  - You may click on the plus button located at the bottom right of the main page to go to the app's search page where you can search and add new books to one of the book shelfs.
  #### App Search Page.
  - The search page can be access in one of two ways:
    1. Directly typing in the search url into your browser address bar, i.e. `localhost:3000/search`
    2. From the main app page clicking on the plus button at the bottom right of the page to get redirected to the `localhost:3000/search` page.
  - Once on the search page you may enter a search term into the text input field at the top of the page, the app will begin searhcing as soon you start typing text that matches a book in list of available books. The app searches by book title or author(s) name(s).
  - If no results are returned for your search term you will get a message being outputted stating that _No results please try another search term_.
  - All search results will be outputted as an image of the book's cover (where applicable), book title and book author(s).
  - Each book item will also have a drop down arrow to it's bottom right, which can be used to move the selected book to one o fthe three book shelves on the App's main page.
  - If any book in the results is already present in of the main page's book shelves it's currenty assign book shelf value will show up in the drop down menu, any book that is not yet in a book shelf will have a drop down value of _none_.
  - After completing your search you may return to the main book shelf page by clicking on the back button located in the top left corner of the search input field. Any books that were added from the search page to a book shelf should now be visible on that book shelf back on the main page.
  * There are only a limite dnumber of search terms that work with the app which can be found in the root project directory in the `SEARCH_TERMS.md` file.

  ## Application_Structure

  - The application is build using the React library, using a few class based components containing component state and several stateless functional components.
  - App routing, linking, etc is all done through react-router-dom with use of several router components _BrowserRouter, Route, Switch & Link_
    
  - The application has the following file and folder structure:

```bash
├── CONTRIBUTING.md
├── README.md - Main readme file with instrcutions on how to run and use application. This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. Contains all app dependencies and npm scripts.
├── PUBLIC FOLDER
│   ├── favicon.ico # React App Icon.
│   └── index.html # Base HTML file with boilerplate html for app and script  tags to load main js file.
└── SRC FOLDER
    └── COMPONENTS FOLDER
      ├── AddBookBtn.js # Functional component that renders Add book button that redirects to search page upon being clicked.
      ├── BookItem.js # Functional component that renders each book with book image, title and author.
      ├── BookList.js # Functional component that renders a list (array) of BookItem components.
      ├── BookShelfChanger.js # Functional component that renders select list element for each BookItem and manages select list behaviour.
      ├── CloseSearchBtn.js # Functional component that renders search input field back button.
      ├── CurrentReadList.js # Functional component that renders list of books on currently reading bookshelf.
      ├── FutureReadList.js # Functional component that renders list of books on _want to read_ bookshelf.
      ├── Header.js # Functional component that renders App's main page header content.
      ├── MainPage.js # Functional component that renders all other custom components that appear on app's main page.
      ├── PrevReadList.js # Functional component that renders list of books on read bookshelf.
      ├── SearchBookItem.js # Functional component that renders each Book item (image, title, author(s)) on search results page.
      ├── SearchBookShelfChanger.js # Functional component that renders select list element for each BookItem on search page and manages      select list behaviour.
      ├── SearchInput.js # Class based component that renders search input element and handles submission of search request.
      ├── SearchList.js # Functional component that renders list of book items return from search.
      ├── SearchPage.js # Class based component that renders al custom components for the entire searchPage.
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root(parent)component of the app (class based) which houses all pages and other components of app as well as routing.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # images/icons used in app interface. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Primary JavaScript file in project. It is used for DOM rendering only (ReactDOM.render method call).
```

  ## Backend_Server

  To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

  * [`getAll`](#getall)
  * [`update`](#update)
  * [`search`](#search)

  ### `getAll`

  Method Signature:

  ```js
  getAll()
  ```

  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * This collection represents the books currently in the bookshelves in your app.

  ### `update`

  Method Signature:

  ```js
  update(book, shelf)
  ```

  * book: `<Object>` containing at minimum an `id` attribute
  * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
  * Returns a Promise which resolves to a JSON object containing the response data of the POST request

  ### `search`

  Method Signature:

  ```js
  search(query)
  ```

  * query: `<String>`
  * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
  * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

  ## Important
  The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

  ## Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

  ## Contributing

  All the starter code for the MyReads React app was provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).
