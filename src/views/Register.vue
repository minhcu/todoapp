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
import axios from "axios";
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
      console.log(this.name.length > 0 ? true:false)
      return this.name.length > 0 ? this.nameWarning = true: this.nameWarning = false
    },
    phoneValidate() {
      return this.phone.length > 0 ? this.phoneWarning = true: this.phoneWarning = false
    },
    async addNewUser() {
      this.nameValidate();
      this.phoneValidate();
      if (!(this.nameWarning && this.phoneWnameWarning)) {
        return Event.stopPropagation;
      }
      const name = this.$refs.name.value;
      const phone = this.$refs.phone.value;
      await axios.post(
        "https://60d73250307c300017a5f71e.mockapi.io/v1/users/",
        {
          name: name,
          phoneNumber: phone,
        }
      );
      this.name= "";
      this.phone = "";
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