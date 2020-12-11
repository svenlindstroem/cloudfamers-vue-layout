<template>
  <div>
    <div class="block page-header">Page Header Title: {{ title }}</div>
    <div class="block slot">
      <div>Page Header Slot</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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
.slot {
  border: 3px solid lightblue;
  margin: 10px;
}
</style>