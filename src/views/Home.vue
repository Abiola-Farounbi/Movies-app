<template>
  <div class="home">
   <header>
     <h1> Welcome to Muvies </h1>
   </header>
   <main>
    <p> Find the latest and trending Movies and TV shows all in one place </p>
    <button v-if="!$auth.isAuthenticated" @click="login"> Get Started Now </button>
    <button v-else > <router-link to="/movies"> Movies </router-link> </button>
   </main>
 
  </div>
</template>

<script>

export default {
  name: "Home",
  methods:{
    // Login the user
     login() {
      this.$auth.loginWithRedirect();
    },
  },
   // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
 
};
</script>
<style scoped>
.home{
  height:100vh;
}
h1{
    text-align:center;
}
main{
  text-align:center;
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
main button a{
  color:white;
  text-decoration: none;
  font-size: 18px;
}

/* responsiveness */
 @media screen and (max-width: 500px){
   main{
  width:90%;
}
 }
</style>
