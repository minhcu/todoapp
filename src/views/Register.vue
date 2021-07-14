<template>
  <div class="register">
    <div class="box">
      <h2>Add New User</h2>
      <p>Add đi chờ chi??</p>
      <div class="inputbox">
        <input ref="name" :class="{error: !this.nameWarning}" placeholder="Name" type="text" v-model="name" @blur="nameValidate" />
        <div v-if="!this.nameWarning" class="warning">Điền vào bạn ơi!!!</div>
      </div>
      <div class="inputbox">
        <input ref="phone" :class="{error: !this.phoneWarning}" placeholder="Phone" type="text" v-model="phone" @blur="phoneValidate"/>
        <div v-if="!this.phoneWarning" class="warning">Điền vào bạn ơi!!!</div>
      </div>
      <div class="submit" @click="addNewUser">
        <span>Register</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      nameWarning: true,
      phoneWarning: true,
    }
  },
  methods: {
    nameValidate() {
      return this.name.length > 0 ? this.nameWarning = true: this.nameWarning = false
    },
    phoneValidate() {
      return this.phone.length > 0 ? this.phoneWarning = true: this.phoneWarning = false
    },
    addNewUser() {
      this.nameValidate();
      this.phoneValidate();
      if (!(this.nameWarning && this.phoneWarning)) return Event.stopPropagation;
      const id = this.$store.state.usersData.length - 1;
      const user = {
        name: this.name,
        phoneNumber: this.phone,
        id: Number(this.$store.state.usersData[id].id) + 1
      }
      this.$store.commit('addNewUser', user)
      this.name= "";
      this.phone = "";
      this.$router.push("/")
    },
  }
};
</script>

<style lang="scss" scoped>
@keyframes widthIncrease {
  0% {
    width: 150px;
  }
  100% {
    width: 300px;
  }
}
.register {
  height: 100vh;
  display: flex;
  .box {
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 50px 0;
    background-color: white;
    h2 {
      margin-bottom: 5px;
    }
    p {
      margin: 0;
      color: rgb(197, 192, 192);
    }
    .inputbox {
      margin: 10px 0;
      input {
        background-color: #f4f8f7;
        outline: none;
        border-radius: 10px;
        border: none;
        padding: 15px;
      }
      input:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        animation: widthIncrease 0.5s forwards;
      }
      .warning {
        padding: 5px 0;
        color: red;
      }
      .error {
        border: 1px solid red;
      }
      .error::placeholder {
        color: red;
      }
    }
    .submit {
      background-color: #42b983;
      color: white;
      width: 200px;
      margin: auto;
      padding: 10px 0;
      cursor: pointer;
      border-radius: 25px;
      position: relative;
      text-transform: uppercase;
      font-weight: 700;
      span {
        z-index: 999;
      }
    }
    .submit::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.1);
      opacity: 0;
      z-index: 1;
    }
    .submit::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 25px;
      opacity: 0;
      z-index: 1;
    }
    .submit:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    .submit:hover::before {
      opacity: 1;
    }
    .submit:active::after {
      opacity: 1;
    }
  }
}
</style>