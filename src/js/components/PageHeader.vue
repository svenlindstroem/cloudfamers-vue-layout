<template>
  <div class="block page-header">Page Header Title: {{ title }}</div>
</template>

<script>
export default {
  name: "hello",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: "",
    };
  },
};
</script>
<style scoped>
.page-header {
  border: 3px solid black;
  margin: 10px;
}
</style>