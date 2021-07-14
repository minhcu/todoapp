<template>
  <div class="userdetail">
    <div class="userbox">
      <div class="info">
        <div class="inputbox">
          <span v-if="btnCheck">{{ user.name }}</span>
          <input
            v-else
            :class="{error: !this.nameWarning}"
            type="text"
            ref="name"
            placeholder="Name"
            required
            :value="user.name"
            @blur="nameValidate"
          />
          <div v-if="!this.nameWarning" class="warning">Điền vào bạn ơi!!!</div>
        </div>
        <div class="inputbox">
          <span v-if="btnCheck">{{ user.phoneNumber }}</span>
          <input
            v-else
            :class="{error: !this.phoneWarning}"
            type="text"
            ref="phone"
            placeholder="Phone"
            required
            :value="user.phoneNumber"
            @blur="phoneValidate"
          />
          <div v-if="!this.phoneWarning" class="warning">Điền vào bạn ơi!!!</div>
        </div>
      </div>
      <div v-if="btnCheck" class="btn edit" @click="editUserDetail">Edit</div>
      <div v-else class="editmode">
        <div class="btn save" @click="updateUserDetail">Save</div>
        <div class="btn cancel" @click="cancelEdit">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserDetail",
  data() {
    return {
      user: {},
      btnCheck: true,
      nameWarning: true,
      phoneWarning: true,
    };
  },
  created() {
    this.user = this.$store.state.usersData.find(user => user.id == this.$route.params.id);
  },
  methods: {
    nameValidate() {
      return this.user.name.length > 0
        ? (this.nameWarning = true)
        : (this.nameWarning = false);
    },
    phoneValidate() {
      return this.user.phoneNumber.length > 0
        ? (this.phoneWarning = true)
        : (this.phoneWarning = false);
    },
    editUserDetail() {
      this.btnCheck = !this.btnCheck;
      return;
    },
    cancelEdit() {
      this.user = this.$store.state.usersData.find(user => user.id == this.$route.params.id);
      this.btnCheck = !this.btnCheck;
      return;
    },
    updateUserDetail() {
      if (!(this.nameWarning && this.phoneWarning)) return Event.stopPropagation;
      this.user.name = this.$refs.name.value;
      this.user.phoneNumber = this.$refs.phone.value;
      this.btnCheck = !this.btnCheck;
      const index = this.$store.state.usersData.findIndex(user => user.id == this.$route.params.id);
      const data = this.user;
      this.$store.commit('updateUser', data, index);
      return;
    },
  }
};
</script>

<style lang="scss" scoped>
.userdetail {
  width: 600px;
  margin: auto;
  height: 100vh;
  .userbox {
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    color: #42b983;
    font-weight: 700;
    padding: 25px 0;
    .avatar {
      width: 150px;
      height: 150px;
      margin: auto;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .inputbox {
    margin: 10px 0;
  }
  input {
    outline: none;
    border: none;
    background-color: #42b983;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 15px;
    padding: 10px;
  }
  input:focus {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    background-color: white;
    border: 1px solid #42b983;
    color: black;
  }
  .btn {
    width: 200px;
    margin: auto;
    cursor: pointer;
    padding: 10px 15px;
    color: white;
    background-color: green;
  }
  .btn:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
  .save {
    background-color: green;
  }
  .cancel {
    background-color: lightgrey;
    color: black;
  }
  .editmode {
    display: flex;
  }
  .warning {
    color: red;
    padding: 10px 0;
  }
  .error {
    background-color: red;
  }
  .error::placeholder {
    color: white;
  }
}
</style>