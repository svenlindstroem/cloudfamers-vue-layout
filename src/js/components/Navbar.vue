<template>
  <div class="block navbar">
    <h1>{{ msg }}</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/test/edit">test/edit</router-link>
  </div>
</template>

<script>
export default {
  name: "navbar",
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      msg: "Navbar",
    };
  },
};
</script>
<style scoped>
.router-link-exact-active {
  background-color: lightblue;
}
</style>