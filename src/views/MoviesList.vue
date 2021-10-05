<template>
  <div class="main-page">
   <header>
     <h1> Trending Movies </h1>
   </header>
   <main>
    <div v-for="movie in movies" v-bind:key="movie.id" class="movie-t">
      <h3> {{ movie.original_title}}</h3>
      <img :src="'https://images.tmdb.org/t/p/original'+ movie.poster_path" alt='movie poster'/>
   
    </div>
   
   </main>
 
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: "MoviesList",
  data() {
    return {
       movies: [],
    };
  },
   methods: {
    async getMovies() {
      try {
        let response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=23d3e5b3f085a72f85a21217806d544d");
        let data = await response.json();
        this.movies=data.results
        console.log(this.movies)
      } catch (error) {
        console.log(error);
      }
    },
 
  },
  created() {
    this.getMovies();
  },
 
 
};
</script>
<style scoped>
.main-page{
   padding: 20px;
   border: 1px solid #8a2be2;
   color:white;
}
main{
  display: grid;
grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(4, 1fr);
}
img{
  width:200px;
  height:200px;
}


</style>
