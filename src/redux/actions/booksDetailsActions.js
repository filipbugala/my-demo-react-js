import agent from '../../agent';
import { FETCH_BOOK } from '../../constants/actionTypes';


export const fetchBook = (bookId) => ({
  type: FETCH_BOOK,
  payload: agent.books.fetchBook(bookId)
})