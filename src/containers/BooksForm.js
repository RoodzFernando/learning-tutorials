import React from 'react'

function BooksForm() {
  const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <form action="#">
      <input type="text" placeholder="Enter a new book"/>
      <select>
        {
          bookCategories.map((category, id) => 
            <option key= {id} value={category}>{category}</option>
          )
        }
      </select>
      <button>Save</button>
    </form>
  )
}

export default BooksForm
