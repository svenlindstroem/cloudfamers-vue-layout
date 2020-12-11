<template>
  <div class="block in-router">
    <PageHeader />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue";
export default {
  name: "test",
  components: [PageHeader],
  data() {
    return {
      msg: "Test View",
    };
  },
};
</script>