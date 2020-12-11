<template>
  <div class="block in-router">
    <PageHeader title="TestList">TestList Slot Content</PageHeader>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue";
export default {
  components: [PageHeader],
  data() {
    return {
      msg: "Test View",
    };
  },
};
</script>
<style scoped>
</style>