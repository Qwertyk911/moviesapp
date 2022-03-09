<script>/* eslint-disable prettier/prettier */</script>
<template>

  <BContainer>
    <h3 class='list-title'>IMDB Top 250</h3>
    <b-row>
      <template v-if="isExist">
        <BCol
          cols="3"
          v-for="(movie, key) in list"
          :key="key"
        >
          <MovieItem :movie="movie" />
        </BCol>
      </template>
      <template v-else>
          <div>Empty List</div>
        </template>
    </b-row>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem.vue"
export default {
  name: "MoviesList",
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isExist () {
      return Boolean(Object.keys(this.list).length)
    }
  }
}
</script>
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
