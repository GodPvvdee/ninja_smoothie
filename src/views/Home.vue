<template>
  <div class="home">
    <Index msg="" />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/Index.vue";
//import Index from "../components/Index.vue";

export default {
  name: "Home",
  components: {
    Index,
  },
};
</script>
