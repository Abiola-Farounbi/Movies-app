<template>
  <div id="app">
     <Navbar></Navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #222222;
}
body{
   margin:0px;
  padding:0px;
}


</style>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
   components: {
    Navbar
  },
   
     
 
}
</script>
