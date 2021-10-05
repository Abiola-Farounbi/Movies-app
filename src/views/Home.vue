<template>
  <div class="home">
   <header>
     <h1> Welcome to Muvies </h1>
   </header>
   <main>
    <p> Find the latest and trending Movies and TV shows all in one place </p>
    <button @click="login"> Get Started Now </button>
   </main>
 
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: "Home",
  methods:{
     login() {
      this.$auth.loginWithRedirect();
    },
  }
 
 
};
</script>
<style scoped>
.home{
  height:100vh;
}
main{
  width:500px;
  border:1px solid #8a2be2;
  margin: 20px auto;
  font-size:18px;
  padding:20px;
}
main button{
  border:none;
  background-color: #8a2be2;
  color:white;
  border-radius:10px;
  padding:20px;
}

</style>
