import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  static defaultProps = {
       books: []
    }

//Uses option buttons to change the bookshelf book is on
  selectShelf=(shelf) => {
    console.log(this)
    BooksAPI.update(this.props.book, shelf);
     this.setState({ currentShelf: shelf })

    //Automatically refreshes the page after update by using getAll().
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
     // console.log(shelf)
    })
  }


  render(){
    return(
      <div>
        <div className="book">
          <div className="book-top">
      {/*Ternary Operator used to show empty thumbnail if imageLinks is not present see: https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e*/}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks? `url("${this.props.book.imageLinks.thumbnail}")`:``}}>

            </div>
            <div className="book-shelf-changer">
              <select value={this.props.currentShelf} onChange={(event) => this.selectShelf(event.target.value)}>
                <option value="move">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </div>
);
}
}
export default Book
