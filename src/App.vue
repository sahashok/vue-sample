<template>
  <div>
    <h1>Welcome To vue js</h1>
    <SignUp />
    <HomeCom />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>
import HomeCom from './components/HomeCom.vue';
import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  components:{
    SignUp,
    HomeCom,
}

}
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