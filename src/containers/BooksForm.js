import React from 'react';
import { connect } from 'react-redux';
import { addBookAction } from '../reducers/book';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.nodeName === 'INPUT') {
      this.setState({
        title: event.target.value
      })
    }else if(event.target.nodeName === 'SELECT') {
        this.setState({
          category: event.target.value
        })
    }
    // console.log(this.props.newBook(this.state))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: '',
      category: ''
    })
    // this.props.newBook(this.state)
    // this.props.store.dispatch(addBookAction({id: 1, title: 'test', category: 'Action'}));
    // console.log()
    console.log('new book added!', this.state)
  }
  render(){
    const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return (
    <form action="#">
      <input value = {this.state.input} onChange = {this.handleChange} type="text" placeholder="Enter a new book"/>
      <select onChange = {this.handleChange}>
      
        {
          bookCategories.map((category, id) => 
            <option key= {id} value={category}>{category}</option>
          )
        }
      </select>
      <button onClick = {this.handleSubmit} >Save</button>
    <p>
      input: {this.state.title} <br/>
      category: {this.state.category}
     </p>
    </form>
  )}
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newBook: book => dispatch(addBookAction(book))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksForm)
