import agent from '../../agent';
import { SEARCH } from '../../constants/actionTypes';

// redux-promise-middleware
export const search = (searchQuery) => ({
  type: SEARCH,
  payload: agent.books.search(searchQuery)
})

// redux-thunk
// export const search = (searchQuery) => (dispatch) => {
//   dispatch({
//     type: 'SEARCH_PENDING'
//   })

//   agent.books.search(searchQuery).then(data => {
//     dispatch({
//       type: 'SEARCH_FULFILLED',
//       payload: data
//     })
//   })
// }