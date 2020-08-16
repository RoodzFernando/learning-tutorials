const { ADD_BOOK } = require("../actions")

export const addBookAction = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook
  }
}