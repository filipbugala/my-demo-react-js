import { 
  FETCH_BOOK_PENDING,
  FETCH_BOOK_FULFILLED,
  FETCH_BOOK_REJECTED
} from '../../constants/actionTypes';

const initialState = {
  title: '',
  subtitle: '',
  isFetching: false
};

export const bookDetails = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BOOK_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BOOK_FULFILLED:
      return {
        ...state,
        title: action.payload.volumeInfo.title,
        subtitle: action.payload.volumeInfo.subtitle,
        isFetching: false
      };
    case FETCH_BOOK_REJECTED:
      return console.log('Fetching book details error!');
    default:
      return state;
  }
}


