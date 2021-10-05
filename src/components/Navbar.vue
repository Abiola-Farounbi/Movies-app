<template>
  <nav>
   <li>   <router-link to="/">Home |</router-link> </li>
       <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <li> <button v-if="!$auth.isAuthenticated" @click="login">Sign In</button> </li>
      <!-- show logout when authenticated -->
      <li> <button v-if="$auth.isAuthenticated" @click="logout">Log out</button> </li>
    </div>
    <li v-if="$auth.isAuthenticated">  <router-link to="/movies"> Movies </router-link> </li>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    display: flex;
    justify-content: space-between;
    padding:20px;
    border-bottom: 1px solid #8a2be2;
}
li{
    display:inline-block;
    margin:0px 10px;
}
li a{
    text-decoration: none;
    color: white;
    font-size: 18px;
}
li button{
  border:none;
  background-color: #8a2be2;
  color:white;
  border-radius:10px;
  padding:10px;
}
</style>
