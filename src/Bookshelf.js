import React, {Component} from 'react'
import Book from './Book';

class Bookshelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map(book =>(
            <li key={book.id}>
              <Book book={book} selectShelf={this.selectShelf} />
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
