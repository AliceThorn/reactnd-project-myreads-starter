import React, {Component} from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static defaultProps = {
    books: [],
  }

  state={
    query: '',
    queryResults: []
  }


/*
//function to determine if the books returned from the search have the correct shelf
   searchShelf = book => {
   // let hasBookshelf = this.props.books.concat(this.state.queryResult)
      //  hasBookshelf? book.shelf="read": book.shelf="none";
     if (book.id === this.state.queryResult.id) {
                        book.shelf=this.props.book.shelf
                           return book
                       }else{
                          book.shelf = "none"
                            return book
                            }
                      }      */

//updates the results of the search
  updateQueryResult = (query) => {
    this.setState({ query: query });
    console.log(query)

    BooksAPI.search(query).then((queryResults) => {
      //shows an empty array if there are no matches in the search
      if (Array.isArray(queryResults)) {
        this.setState({ queryResults: queryResults })
       console.log(this.state.queryResults)
       //queryResult = queryResult.map(this.searchShelf)
      } else {
        this.setState({ queryResults: [] })
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
{/*compare the queryResult Array with the books Array from the HomePage to see if they match*/}
          <ol className="books-grid">
{this.state.queryResults.map(queryResult =>{
           let shelf = "none"
           //console.log(shelf)
//use the .map function to create queryResult array
           this.props.books.map(book=>{
           if (book.id === queryResult.id){
               shelf = book.shelf
           }return book});
return(
              <li key={queryResult.id} >
              <Book book={queryResult} queryResults={this.state.queryResults}  onShelf={shelf}
selectShelf={this.props.selectShelf} />
            </li>
          )
          })
           }
        </ol>
      </div>
    </div>
    )
  }
}

export default Search
