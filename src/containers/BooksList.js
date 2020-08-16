import React from 'react'
import Book from '../components/Book'
import { connect } from 'react-redux';

function BooksList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      {
        props.books.map((book, id) => 
          <Book key={id} book = {book}/>
        )
      }
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BooksList)
/**
 * It should display the books as an html table.
 Each row should contain Book ID, title and category.
 It should connect to the Redux store and fetch the books from the state.
 */