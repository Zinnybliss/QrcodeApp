<template>
  <div id="app">
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