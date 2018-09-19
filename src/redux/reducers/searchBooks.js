import { 
  SEARCH_PENDING,
  SEARCH_FULFILLED,
  SEARCH_REJECTED
} from '../../constants/actionTypes';

const initialState = {
  books: [],
  isFetching: false
}

export const searchBooks =  (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case SEARCH_FULFILLED:
      return {
        ...state,
        books: action.payload.items,
        isFetching: false
      }
    case SEARCH_REJECTED:
      return {}
    default:
      return state;
  }
}