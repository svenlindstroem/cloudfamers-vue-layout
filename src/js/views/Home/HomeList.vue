<template>
  <div class="block in-router">
    <PageHeader title="Home"> Content from Home inside slot </PageHeader>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader.vue";
export default {
  components: { PageHeader },
  name: "Home",
  data() {
    return {
      msg: "Home",
    };
  },
};
</script>