/*
 * @Author: ikouane
 * @Date: 2022-08-11 09:52:54
 * @LastEditTime: 2022-08-11 15:30:18
 * @LastEditors: ikouane
 * @Description:
 * @version:
 */
import { createStore } from "vuex";
import { useStorage } from "@vueuse/core";

export default createStore({
  state: {
    config: useStorage("vue3-todo-data", {
      todos: [
        {
          id: 0,
          content: "内容1",
          date: "2020-08-11",
          isChecked: true,
        },
        {
          id: 1,
          content: "内容111111111111111111111",
          date: "2020-08-12",
          isChecked: false,
        },
      ],
    }),
  },
  mutations: {},
  actions: {},
  modules: {},
});
