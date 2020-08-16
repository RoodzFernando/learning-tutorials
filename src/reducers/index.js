const { ADD_BOOK } = require("../actions")
const bookArray = [{
    id: randomInt(),
    title: 'Cage the specter',
    category: 'Horror'
  },
  {
    id: randomInt(),
    title: '2246: Blight',
    category: 'Sci-Fi'
  },
  {
    id: randomInt(),
    title: 'The Children of Men',
    category: 'History'
  },
  {
    id: randomInt(),
    title: 'Secret of the Mute Mermaid',
    category: 'History'
  },
  {
    id: randomInt(),
    title: 'Death of the Giant Beast',
    category: 'Horror'
  }
]
const initialState = {
  books: bookArray
}
const addBookReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return {
        books: [...state, action.payload]
      }
    default:
      return state
  }
}
function randomInt() {
  return Math.floor(Math.random() * 1000);
}

export default addBookReducer