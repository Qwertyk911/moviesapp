<script>/* eslint-disable */ </script>
<template>
  <div id="app">
    <MoviesList :list='moviesList'/>
    <!-- <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import MoviesList from "@/components/MoviesList.vue"
// поменять местами плот и айди
export default {
  name: "App",
  components: {
    MoviesList
  },
  mounted() {
    // this.fetchMovies();
    // fetch("https://www.omdbapi.com/?apikey=a5337d02&i=tt0111161&plot=full")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("fetch");
    //     console.log(data);
    //   });
  },
  computed:{
    ...mapGetters('movies', ['moviesList'])
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
