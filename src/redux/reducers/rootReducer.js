import { searchBooks } from './searchBooks';
import { bookDetails } from './bookDetails';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchBooks,
  bookDetails
});

export default rootReducer