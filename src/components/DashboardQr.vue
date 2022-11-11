<template>
  <div class="main">
    <nav>
      <div class="brand flex">
        <img src="../../src/assets/qr.png" alt="" />
        <p class="p-text">QrCode</p>
      </div>

      <div class="nav-links">
        <router-link to="/history" class="nav-btn">History</router-link>
      </div>
    </nav>
    <div class="container app__flex glass">
      <h1 class="head-text">Qr<span>Code</span> Generator</h1>
      <p class="p-text">Generate a random Qr code for your ease.</p>
      <form class="app__flex" @submit="handleSubmit">
        <input
          type="text"
          placeholder="https://www.google.com"
          v-model="link"
        />
        <button type="submit" v-bind:disabled="qrs.length == 10 ? true : false">
          Submit
        </button>
      </form>
      <div class="w-[380px]" v-if="errorText">
        <p class="text-red-400 text-[14px]">{{ errorText }}</p>
      </div>

      <p class="p-text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      link: "",
      message: "",
      errorText: "",
    };
  },
  computed: {
    qrs() {
      return this.$store.state.qrs;
    },
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault(this.link);

      if (this.validate()) {
        const url = this.generateUrl(this.link);

        const d = await this.$store.dispatch("addQr", url);

        if (10 - this.qrs.length < 1) {
          this.showMessage(10 - this.qrs.length);
        }

        router.push("/history");
      }
    },
    showMessage(num) {
      this.message = `only ${num} url's available!`;
      setTimeout(() => {
        this.message = "";
      }, 3000);
    },
    validate() {
      if (this.link.length < 3) {
        this.errorText = "Provide a valid url!";
      } else if (!this.link.includes("https://"))
        this.errorText = "Provide a valid url!, use https!";
      else {
        this.errorText = "";
      }

      if (this.errorText) return false;

      return true;
    },
    generateUrl(link) {
      const apiUrl = "https://www.qrtag.net/api/qr_4.png?url=";
      const generatedUrl = `${apiUrl}${link}`;
      return {
        url: link,
        generatedUrl,
        createdAt: new Date().toDateString(),
      };
    },
  },
};
</script>

<style scoped>
* {
  transition: 0.5s;
}
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

img {
  height: 28px;
  width: 28px;
}
.container {
  width: 70%;
  min-height: 80vh;
  padding: 0 10px;

  /* background-color: #90d7ff; */
  flex-direction: column;
  backdrop-filter: blur(10);

  /* background-color: rgba(0, 0, 0, 0.2); */
}

.glass {
  background: white;
  /* min-height: 80vh; */
  /* width: 60%; */
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  /* z-index: 2; */
  backdrop-filter: blur(2rem);
  /* display: flex; */
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 8%;
}

.head-text {
  font-size: 60px;
  color: #fff;
}

.head-text span {
  color: #082d42;
}

.p-text {
  font-size: 18px;
  color: #082d42;
}

form {
  width: 60%;
  /* border: solid; */
  align-items: flex-start;
  /* flex-direction: column; */
  gap: 20px;
}

form input {
  outline: none;
  border: none;
  background: #c9f9ff;

  height: 48px;
  width: 90%;
  border-radius: 16px;
  padding: 0 20px;
}

form button {
  outline: none;
  border: none;
  background: #082d42;

  height: 48px;
  border-radius: 16px;
  padding: 0 30px;
  cursor: pointer;

  color: #90d7ff;

  transition: 0.5s;
}

form button:disabled {
  opacity: 0.5;
  pointer-events: none;
}

form button:hover s {
  opacity: 0.8;
}

@media screen and (min-width: 290px) and (max-width: 830px) {
  .container {
    width: 90%;
    text-align: center;
  }

  .head-text {
    font-size: 30px;
  }
  form {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form input {
    width: 100%;
  }
}

@media screen and (min-width: 500px) and (max-width: 830px) {
  .container {
    width: 90%;
    text-align: center;
  }

  .head-text {
    font-size: 40px;
  }
  form {
    width: 80%;
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
  }

  form input {
    width: 100%;
  }
}
</style>
