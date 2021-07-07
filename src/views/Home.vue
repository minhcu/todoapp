<template>
  <div class="home">
    <div class="search">
      <i class="fas fa-search"></i>
      <input type="text" v-model="searchQuery" placeholder="Search Name.." />
    </div>
    <div class="userlist">
      <div class="header">
        <p class="id">ID</p>
        <p class="name">Name</p>
        <p class="phone">Phone</p>
        <p class="action">Action</p>
      </div>
      <div class="list" v-for="user in searchedNameList" :key="user.id">
        <p class="id">{{ user.id }}</p>
        <p class="name">{{ user.name }}</p>
        <p class="phone">{{ user.phoneNumber }}</p>
        <p class="action">
          <span class="btn detail" @click="goToUserDetail(user.id)"
            >Detail</span
          >
          <span class="btn delete" @click="deleteUser(user.id)">Delete</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      users: [],
      searchQuery: "",
    };
  },
  async created() {
    const userList = await axios.get(
      "https://60d73250307c300017a5f71e.mockapi.io/v1/users"
    );
    this.users = userList.data;
  },
  methods: {
    goToUserDetail(id) {
      this.$router.push(`/user/${id}`);
    },
    async deleteUser(id) {
      await axios.delete(
        `https://60d73250307c300017a5f71e.mockapi.io/v1/users/${id}`
      );
      const userList = await axios.get(
        "https://60d73250307c300017a5f71e.mockapi.io/v1/users"
      );
      this.users = userList.data;
    },
  },
  computed: {
    searchedNameList() {
      let nameList = this.users.filter((test) => {
        return test.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
      return nameList;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: auto;
  padding: 50px 0;
  .userlist {
    border-radius: 10px;
    box-shadow: 0 0 5px #d8d4d4;
    background-color: white;
    overflow: hidden;
    .header {
      display: flex;
      font-weight: 700;
      border-bottom: 1px solid #fcfcfc;
    }
    .list {
      display: flex;
      cursor: pointer;
      padding: 1px 0;
      border-bottom: 1px solid #fcfcfc;
      border-top: 1px solid #fcfcfc;
    }
    .list:hover {
      box-shadow: 0 0 5px white;
      border: 1px solid #42b983;
      color: #42b983;
      font-weight: 700;
    }
    .id {
      width: 10%;
    }
    .name {
      width: 30%;
    }
    .phone {
      width: 30%;
    }
    .action {
      width: 30%;
      .btn {
        border-radius: 5px;
        padding: 10px 15px;
        margin: 0 5px;
        color: white;
        font-weight: 400;
      }
      .btn:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
      }
      .detail {
        background-color: green;
      }
      .delete {
        background-color: red;
      }
    }
  }
  .search {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: white;
      font-size: 30px;
      padding: 5px;
    }
    input {
      background-color: #f4f8f7;
      outline: none;
      border-radius: 10px;
      border: none;
      padding: 15px;
    }
    input:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
