<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/history">Historyqr</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style>
body{
  background-color: #90d7ff;

}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
}

</style>

<style src="./assets/tailwind.css">