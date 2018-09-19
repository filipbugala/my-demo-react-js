import axios from 'axios';

const API_ROOT = 'https://www.googleapis.com/books/v1';

const agent = axios.create({
  baseURL: API_ROOT
})

const responseData = (res) => res.data;

const requests = {
  get: (url) => agent.get(`${url}`)
    .then(responseData)
};

const books = {
  search: (book) => requests.get(`/volumes?q=${book}`),
  fetchBook: (id) => requests.get(`/volumes/${id}`)
};

export default {
  books
}