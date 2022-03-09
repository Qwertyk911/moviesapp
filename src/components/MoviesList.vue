<script>/* eslint-disable prettier/prettier */</script>
<template>
  
    <BContainer>
      <h3 class='list-title'>IMDB Top 250</h3>
    </BContainer>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    type: Object,
    default:() => ({})
  }
}
</script>
<style scoped>
.list-title{
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
