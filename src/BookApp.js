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

//resets the shelves when a change is made
  //restockShelves() {
 // console.log("Restocking shelves")
 //   BooksAPI.getAll().then((books) => {
   // console.log(books)
   // this.setState({ books: books })
   // })
  //}

  componentDidMount() {
    //console.log(BooksAPI.getAll())
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Home books={this.state.books} selectShelf={this.props.selectShelf} restockShelves={this.restockShelves.bind(this)} />
        )}/>
        <Route exact path='/search' render={() => (
          <Search books={this.state.books} queryResult={this.state.queryResult} selectShelf={this.selectShelf} restockShelves={this.restockShelves.bind(this)} />
        )}/>
     </div>
    )
  }
}

export default BooksApp
