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
    moviesPerPage: ({ moviesPerPage}) => moviesPerPage
  },
  mutations: {},
  actions: {
    // video №5 time 14.47
    async fetchMovies (getters) {
      console.log(context)
      // tt0111161
      const response = await axios.get('/', {
        params: {
          i: 'tt0111161',
        }
      })
      console.log(response)
    }
  },
}

export default moviesStore;
