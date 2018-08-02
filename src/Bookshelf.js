import React, {Component} from 'react'
import Book from './Book';

class Bookshelf extends Component {
  static defaultProps = {
    books: [],
  }
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map(book =>(
            <li key={book.id}>
              <Book book={book} currentShelf={this.props.currentShelf} />
            </li>
          )
          )
          }
          </ol>
        </div>
      </div>
)
}
}

export default Bookshelf
