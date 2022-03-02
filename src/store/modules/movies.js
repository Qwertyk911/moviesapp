/* eslint-disable prettier/prettier */
import Imdb from "../mock/imdb_top250.js"
import axios from "@/plugins/axios"
const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: Imdb,
    moviesPerPage: 12,
    currentPage: 1
  },
  getters: {
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage
  },
  mutations: {},
  actions: {
    // video №5 time 20.07
    async fetchMovies ({ getters }) {
      const { currentPage, moviesPerPage, slicedIDs } = getters
      const from = (currentPage * moviesPerPage) - moviesPerPage
      const to = currentPage * moviesPerPage
      const moviesToFetch = slicedIDs(from, to) // Получаем массив с id 12 фильмов (одна страница)
      console.log(moviesToFetch)
      const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`)) // Делаем массив с promise для дальнейшего запроса
      console.log(requests)

      const response = await Promise.all(requests) // Отправляем запрос на сервер с массивом из id
      console.log(response)
    }
  },
}

export default moviesStore;
