<!--
 * @Author: ikouane
 * @Date: 2022-08-11 10:02:28
 * @LastEditTime: 2022-08-11 16:51:10
 * @LastEditors: ikouane
 * @Description: 
 * @version: 
-->
<script setup>
import TodoItem from "@/components/TodoItem.vue";
import { reactive, ref, nextTick } from "vue";
import { useStore } from "vuex";
import { useDateFormat } from "@vueuse/core";

const store = useStore();

const todoData = ref(store.state.config.todos);
const todoListRef = ref(null);
const inputRef = ref(null);

const newTodo = reactive({
  id: "",
  content: "",
  date: "",
});

function addTodo() {
  inputRef.value.focus();
  if (!newTodo.content) return;
  newTodo.id = todoData.value.length;
  newTodo.date = useDateFormat(new Date(), "YYYY-MM-DD");
  todoData.value.push(JSON.parse(JSON.stringify(newTodo)));
  newTodo.content = "";
  nextTick(() => {
    todoListRef.value.scrollTo({
      top: todoListRef.value.scrollHeight,
      behavior: "smooth",
    });
  });
}

function handleUpdateChecked(id) {
  todoData.value.forEach((item) => {
    if (item.id === id) {
      item.isChecked = !item.isChecked;
    }
  });
}

function deleteTodo(id) {
  todoData.value.forEach((item, index) => {
    if (item.id === id) {
      todoData.value.splice(index, 1);
    }
  });
}
</script>

<template>
  <div class="todo__container">
    <div class="new-todo-input__container">
      <input
        type="text"
        ref="inputRef"
        v-model="newTodo.content"
        @keydown.enter="addTodo"
      />
      <button @click="addTodo">添加</button>
    </div>
    <div class="todo-list" ref="todoListRef">
      <TodoItem
        v-for="item in todoData"
        :key="item.id"
        v-bind="item"
        @updateChecked="handleUpdateChecked"
        @delete="deleteTodo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo__container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .todo-list {
    padding: 10px;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>