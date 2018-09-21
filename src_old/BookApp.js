import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Search from './Search'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component{
  state = {
    books: []
  }

  componentDidMount() {
    //console.log(BooksAPI.getAll())
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

 //This function needs to be passed from parent to child components to allow shelf selection
  selectShelf = (book,shelf) => {
    //console.log(this)
    //update function
    BooksAPI.update(book,shelf);
     this.setState({ currentShelf: shelf })
    console.log(shelf)

    BooksAPI.getAll().then((books)=>{
      this.setState({ books: books })
    })
 }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Home books={this.state.books} selectShelf={this.selectShelf} onShelf={this.state.shelf} />
        )}/>
        <Route exact path='/search' render={() => (
          <Search books={this.state.books} selectShelf={this.selectShelf}  onShelf={this.state.shelf}/>
        )}/>
     </div>
    )
  }
}

export default BooksApp
