import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  displayBooks = () => {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading books...</div>)
    } else {
      return (
        <ul id="book-list">
          {
            data.books.map(book => {
              return (
                <li key={ book.id }>{ book.name }</li>
              )
            })
          }
        </ul>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
       { this.displayBooks() }
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);