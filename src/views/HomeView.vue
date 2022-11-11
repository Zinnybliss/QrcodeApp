<template>
  <div class="home">
    <DashboardQr />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardQr from "@/components/DashboardQr.vue";

export default {
  name: "HomeView",
  components: {
    DashboardQr,
  },
};
</script>
