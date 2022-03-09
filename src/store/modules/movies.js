/* eslint-disable prettier/prettier */
import Imdb from "../mock/imdb_top250.js"
import axios from "@/plugins/axios"
import mutations from "@/store/mutations"

function serializeResponse (movies) {
  // Функция предназначена для перобразования ответа на запрос в обьект обьектов
  // с ключом id и полем сам обьект фильм
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie
    return acc
  }, {})
}
const { MOVIES } = mutations
const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: Imdb,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {}
  },
  getters: {
    moviesList: ({ movies}) => movies,
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage
  },
  mutations: {
    [MOVIES] (state, value) {
      state.movies = value
    }
  },
  actions: {
    // video №6 time 3.05
    initMoviesStore: {
      handler ({ dispatch }) {
        dispatch('fetchMovies')
      },
      root: true
    },
    async fetchMovies ({ getters, commit }) {
      const { currentPage, moviesPerPage, slicedIDs } = getters
      const from = (currentPage * moviesPerPage) - moviesPerPage
      const to = currentPage * moviesPerPage
      const moviesToFetch = slicedIDs(from, to) // Получаем массив с id 12 фильмов (одна страница)
      // console.log(moviesToFetch)
      const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`)) // Делаем массив с promise для дальнейшего запроса
      // console.log(requests)

      const response = await Promise.all(requests) // Отправляем запрос на сервер с массивом из id
      const movies = serializeResponse(response)
      commit(MOVIES, movies)
      console.log(movies)
    }
  },
}

export default moviesStore;
