<template>
  <div id="app">
    <div class="nav">
      <div class="avatar">
        <img src="https://pbs.twimg.com/media/EubRr6UVkAAGgt4.jpg" />
      </div>
      <div class="link">
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
      </div>
      <div class="copyright">Đây là Copyright</div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #42b983;
  margin-left: 15%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
}

.nav {
  width: 15%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  bottom: 0;
  .avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    margin-top: 20px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .link {
    display: flex;
    flex-direction: column;
    margin: 0 50px;
    a {
      text-decoration: none;
      margin: 20px 0;
      padding: 20px;
      background-color: #42b983;
      color: white;
      font-weight: 700;
    }
    a:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    }
  }
  .copyright {
    padding: 10px 0;
    font-weight: 700;
    font-size: 14px;
  }
}
.content {
  width: 85%;
}
</style>
