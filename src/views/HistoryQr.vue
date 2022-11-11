<template>
  <div class="main">
    <nav>
      <div class="brand flex">
        <img src="../../src/assets/qr.png" alt="" />
        <p class="p-text">QrCode</p>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-btn">Home</router-link>
      </div>
    </nav>

    <!-- <div class="section app__flex"> -->
    <div class="container app__flex glass">
      <h1 class="head-text">History</h1>
      <div class="qrs flex flex-col gap-[8px] sm:gap-[20px]">
        <qr-card v-for="qr in qrs" :key="qr.createdAt" :qr="qr" />
      </div>
      <div
        class="h-[400px] flex flex-col justify-center align-items"
        v-if="qrs.length < 1"
      >
        <img src="../assets/not-found.svg" class="w-[150px]" />
        <p>No recent qr's!</p>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import QrCard from "@/components/QrCard.vue";
export default {
  components: { QrCard },
  data() {
    return {
      message: "",
      // qrs: [],
    };
  },
  computed: {
    qrs() {
      return this.$store.state.qrs;
    },
  },
  methods: {
    getData() {},
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
  padding: 10px 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 90%;
}
nav .brand {
  gap: 4px;
}

nav .brand p {
  font-weight: 700;
  font-size: 20px;
}
nav .nav-links .nav-btn {
  outline: none;
  border: none;
  background: #082d42;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 16px;
  padding: 0 30px;
  cursor: pointer;
  color: #90d7ff;
  text-decoration: none;
}

nav .brand img {
  height: 28px;
  width: 28px;
}
.container {
  justify-content: start;
  padding: 10px 0;
  overflow: auto;
  width: 70%;
  height: 80vh;
  max-height: 80vh;
  flex-direction: column;
  backdrop-filter: blur(10);
  background-color: rgba(0, 0, 0, 0.2);
}

.container .qrs {
  overflow: auto;
  padding: 1px 18px;
}

.glass {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 8%;
}

.head-text {
  font-size: 40px;
  color: #082d42;
}

.head-text span {
  color: #5dfdcb;
}

.p-text {
  font-size: 18px;
  color: #082d42;
}

@media screen and (min-width: 290px) and (max-width: 830px) {
  .main {
    gap: 30px;
  }
  .container {
    width: 95%;
  }
  .head-text {
    font-size: 30px;
  }
}
</style>
