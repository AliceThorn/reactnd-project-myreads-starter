import React, {Component} from 'react'
import Bookshelf from './Bookshelf';

class Home extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")} selectShelf={this.selectShelf} />
            <Bookshelf title="Want to Read" books={this.props.books.filter(book => book.shelf === "wantToRead")} selectShelf={this.selectShelf} />
            <Bookshelf title="Read" books={this.props.books.filter(book => book.shelf === "read")} selectShelf={this.selectShelf} />
          </div>
          <div className="open-search">
            <a href="/search">Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
