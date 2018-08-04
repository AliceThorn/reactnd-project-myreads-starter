import React, {Component} from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static defaultProps = {
    books: [],
  }

  state={
    query: '',
    queryResult: []
  }

//function to determine if the books returned from the search have the correct shelf
   searchShelf = book => { if (book.id===this.state.queryResult.id) {
                           book.shelf = this.props.book.shelf
                            return book
                       }else{
                         book.shelf = "none"
                           return book
                            }
                      }

//updates the results of the search
  updateQueryResult = (query) => {
    this.setState({ query: query });
    console.log(query)

    BooksAPI.search(query).then((queryResult) => {
      //shows an empty array if there are no matches in the search
      if (Array.isArray(queryResult)) {
       console.log(this.state.queryResult)
        queryResult = queryResult.map(this.searchShelf)
        this.setState({ queryResult: queryResult })
      } else {
        this.setState({ queryResult: [] })
      }
    })
  }

   render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" href="/">Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQueryResult(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
          {this.state.queryResult.map(book =>(
              <li key={book.id} >
              <Book book={book} queryResult={this.state.queryResult}  currentShelf={this.props.currentShelf} selectShelf={this.props.selectShelf} />
            </li>
          ))  }
        </ol>
      </div>
    </div>
    )
  }
}

export default Search
