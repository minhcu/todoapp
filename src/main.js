import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    usersData: [
      {
       "name": "Gertrude Oberbrunner",
       "phoneNumber": "769.437.5323",
       "id": "1"
      },
      {
       "name": "Joy Kuhic",
       "phoneNumber": "1-999-292-3273 x7051",
       "id": "2"
      },
      {
       "name": "Thelma Collins V",
       "phoneNumber": "602-230-2549 x237",
       "id": "3"
      },
      {
       "name": "Joseph Yost",
       "phoneNumber": "747-425-4057",
       "id": "4"
      },
      {
       "name": "Gina Hansen",
       "phoneNumber": "320.682.9313",
       "id": "5"
      },
      {
       "name": "Miss Julius Steuber",
       "phoneNumber": "980.448.9399 x298",
       "id": "6"
      },
      {
       "name": "Cody Barton",
       "phoneNumber": "(613) 732-8962 x0494",
       "id": "7"
      },
      {
       "name": "Mary Blick",
       "phoneNumber": "896.753.8652 x87192",
       "id": "8"
      },
      {
       "name": "Jacob Zboncak",
       "phoneNumber": "1-885-330-2293",
       "id": "9"
      },
      {
       "name": "Hannah Friesen",
       "phoneNumber": "(834) 796-3373",
       "id": "10"
      },
      {
       "name": "Dr. Wesley Fahey",
       "phoneNumber": "214.665.7767 x5732",
       "id": "11"
      },
      {
       "name": "Johnny Haag",
       "phoneNumber": "563.412.5187",
       "id": "12"
      },
      {
       "name": "Connie Homenick Jr.",
       "phoneNumber": "595-566-6691 x047",
       "id": "13"
      },
      {
       "name": "Lola Bayer",
       "phoneNumber": "1-348-201-5637 x6361",
       "id": "14"
      },
      {
       "name": "Dan Walker",
       "phoneNumber": "663.548.0971",
       "id": "15"
      },
      {
       "name": "Jose Simonis",
       "phoneNumber": "1-911-668-0714 x359",
       "id": "16"
      },
      {
       "name": "Tabitha Goldner",
       "phoneNumber": "705-760-8208 x5333",
       "id": "17"
      },
      {
       "name": "Alison Breitenberg",
       "phoneNumber": "1-362-896-4470 x4926",
       "id": "18"
      },
      {
       "name": "Mandy Oberbrunner",
       "phoneNumber": "753.909.5440 x33503",
       "id": "19"
      },
      {
       "name": "Paul Fisher",
       "phoneNumber": "402.459.3217 x5839",
       "id": "20"
      }
     ]
  },
  mutations: {
    deleteUser(state, id) {
      state.usersData.splice(id-1)
    },
    addNewUser(state, data) {
      state.usersData.push(data);
    },
    updateUser(state, data, id) {
      state.usersData[id] = data;
    }
  },
});

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
