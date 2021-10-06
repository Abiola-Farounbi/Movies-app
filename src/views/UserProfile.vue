<template>
  <div class="user">
  <main>
    
        <img :src="$auth.user.picture" alt="User's profile picture"/>
        <h2>{{ $auth.user.name }}</h2>
        <p>{{ $auth.user.email }}</p>
     
  </main>
   </div>
</template>
<script>
export default {
  name: "UserProfile",

};
</script>
<style scoped>
main{
  text-align:center;
  width:500px;
  border:1px solid #8a2be2;
  margin: 20px auto;
  font-size:18px;
  padding:20px;
}
.user{
    height:100vh;
}
img{
    width:200px;
    height:200px;
    border-radius:50%;
}
/* responsiveness */
 @media screen and (max-width: 500px){
   main{
  width:90%;
}
 }

</style>
