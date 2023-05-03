import axios from "../service/axios";

const authstore = {
  state: () => ({
    loading: true,
    errorMessage: "",
    username: "",
  }),

  mutations: {
    SET_LOAD(state) {
      state.loading = false;
    },
    SET_ERROR(state, err) {
      state.errorMessage = err;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
  },

  actions: {
    async signin({ commit }, payload) {
      try {
        const res = await axios.post("/user/login", payload);
        localStorage.setItem("token", res?.data?.tokens?.access_token);
        commit("SET_USERNAME", res.data.first_name);
        commit("SET_LOAD");

        return res;
      } catch (err) {
        commit("SET_ERROR", err);
        return err;
      }
    },
  },
};

export default authstore;
