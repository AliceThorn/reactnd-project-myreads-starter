import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Search from './Search'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component{
  state = {
    books:[],
    currentShelf: "move"
  }

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
          <Home books={this.state.books} selectShelf={this.props.selectShelf} />
        )}/>
        <Route exact path='/search' render={() => (
          <Search books={this.state.books} queryResult={this.state.queryResult} selectShelf={this.selectShelf}/>
        )}/>
     </div>
    )
  }
}

export default BooksApp
