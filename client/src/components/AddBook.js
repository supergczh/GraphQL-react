import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  displayAuthors = () => {
    const data = this.props.data;
    if (data.loading) {
      return (<option disabled>Loading authors...</option>)
    } else {
      return (
        data.authors.map(author => {
          return (
            <option key={ author.id } value={ author.id }>{ author.name }</option>
          )
        })
      )
    }
  }

  render() {
    return (
      <form>
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);