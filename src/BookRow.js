import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    let author = this.props.author;
    let bookAuthors = book.authors.map(auth => auth.name + " ");

    return (
      <tr>
        <td>{book.title}</td>
        <td>{bookAuthors}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
