import { createStore } from "vuex";
import authstore from "../modules/auth.js";

export const store = createStore({
  modules: {
    authstore
  },
});
