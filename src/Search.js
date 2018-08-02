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

//updates the results of the search
  updateQueryResult = (query) => {
    this.setState({ query: query });
    console.log(query)

    BooksAPI.search(query).then((queryResult) => {
      //shows an empty array if there are no matches in the search
      if (Array.isArray(queryResult)) {
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
            <li key={book.id}>
              <Book book={book} queryResult={this.state.queryResult} selectShelf={this.selectShelf} restockShelves={this.props.restockShelves.bind(this)} />

            </li>
          ))  }
        </ol>
      </div>
    </div>
    )
  }
}

export default Search
