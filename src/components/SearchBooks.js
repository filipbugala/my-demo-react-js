import * as React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../redux/actions/searchBooksActions';
// import BookMediaObject from './BookMediaObject';
import BooksList from './BooksList';

const mapStateToProps = (state) => ({
  books: state.searchBooks.books,
  isFetching: state.searchBooks.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  searchBooks(searchQuery) {
    dispatch(search(searchQuery))
  }
})

class SearchBooks extends React.Component {

  constructor() {
    super();
    this.state = {
      currentSearch: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      currentSearch: event.currentTarget.value
    })
  }

  render() {
    const { isFetching, books } = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={() => this.props.searchBooks(this.state.currentSearch)}>
          Fetch data
        </button>
        <div>
          {
            isFetching ? <p>Loading data</p>
            :
            // key is needed: element rerendering vs whole row rerenderinig
            // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
            (books.length > 0 && <BooksList books={books} />)
          }
        </div>
      </div>
    );
  }

}

SearchBooks.propTypes = {
  currentSearch: PropTypes.string,
  books: PropTypes.array,
  isFetching: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooks);
