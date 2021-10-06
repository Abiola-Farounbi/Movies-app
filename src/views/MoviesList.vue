<template>
  <div class="main-page">
   <header>
     <h1> Trending Movies </h1>
   </header>
   <main>
    <div v-for="movie in movies" v-bind:key="movie.id" class="movie-t">
      <img :src="movie_url+movie.poster_path" alt='movie poster'/>
     <div class="movie_desc">
        <h3> {{ movie.original_title}}</h3>
      <p> Ratings - {{movie.vote_average}}</p>
      <p> Release Date - {{movie.release_date}} </p>
     </div>
  
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
       api_key:process.env.VUE_APP_API_KEY,
      //  Using the cloudinary fetch URL 
       movie_url:'https://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,b_rgb:222,e_improve,r_50:50:0:0,bo_2px_solid_rgb:8a2be2/https://images.tmdb.org/t/p/original'
    };
  },
   methods: {
    async getMovies() {
      try {
        let response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.api_key}`);
        let data = await response.json();
        this.movies=data.results
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
h1{
  text-align:center;
}
.main-page{
   padding: 20px;
   border: 1px solid #8a2be2;
   color:white;
}
main{
  display: grid;
  /* grid-template-rows: repeat(3, 300px); */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5em;
}

.movie_desc{
  border:2px solid #8a2be2;
  border-radius: 0px 0px 50px 50px;
  padding: 20px 0px;
  width: 300px;
  text-align: center;
}
/* responsiveness */
 @media screen and (max-width: 500px){
   main{
     display: block;
   }
   .movie-t{
     margin: 20px 0px;
   }
 }

</style>
