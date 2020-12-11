<template>
  <div id="layout" class="block layout">
    <h1>Layout</h1>
    <Navbar />
    <div class="block router-view">
      <h1>router-view</h1>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
  name: "layout",
};
</script>
<style scoped>
.block {
  margin: 10px;
}
.router-view {
  border: 4px solid red;
}
.in-router {
  border: 4px solid green;
}
.layout {
  border: 4px solid blue;
}
.navbar {
  border: 4px solid violet;
}
.footer {
  border: 4px solid yellow;
}

#layout {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
