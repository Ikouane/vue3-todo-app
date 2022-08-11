<!--
 * @Author: ikouane
 * @Date: 2022-08-11 10:02:08
 * @LastEditTime: 2022-08-11 16:47:43
 * @LastEditors: ikouane
 * @Description: 
 * @version: 
-->
<template>
  <div class="todo-item" :class="{ checked: props.isChecked }">
    <label :for="'finish' + props.id">
      <svg
        v-if="props.isChecked"
        t="1660202434335"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1321"
        width="48"
        height="48"
      >
        <path
          d="M135.7 513.4v284.2c0 49.9 40.7 90.6 90.7 90.6h571.2c50 0 90.7-40.6 90.7-90.6V511.9l-752.6 1.5z"
          fill="#CEE8FA"
          p-id="1322"
        ></path>
        <path
          d="M797.7 98.4H226.3c-70.6 0-128 57.4-128 128v571.3c0 70.6 57.4 128 128 128h571.3c70.6 0 128-57.4 128-128v-571.3c0.1-70.7-57.3-128-127.9-128z m77.6 719.6c0 31.5-25.6 57.1-57.1 57.1H205.9c-31.5 0-57.1-25.6-57.1-57.1v-612.2c0-31.5 25.6-57.1 57.1-57.1h612.3c31.5 0 57.1 25.6 57.1 57.1V818z"
          fill="#2197EF"
          p-id="1323"
        ></path>
        <path
          d="M515.3 631.3c-9.9 0-19.4-3.9-26.4-10.9L371.3 502.7c-14.6-14.6-14.6-38.2 0-52.8 14.6-14.6 38.2-14.6 52.8 0l91.2 91.2L653 403.4c14.6-14.6 38.2-14.6 52.8 0s14.6 38.2 0 52.8l-164 164.2c-7 7-16.5 10.9-26.5 10.9z"
          fill="#2197EF"
          p-id="1324"
        ></path>
      </svg>

      <svg
        v-else
        t="1660202445544"
        class="icon"
        viewBox="0 0 1112 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1543"
        width="48"
        height="48"
      >
        <path
          d="M178.156897 513.35729v285.734708c0 50.169465 40.919784 91.089249 91.189789 91.089249h574.284536c50.270005 0 91.189789-40.819244 91.189789-91.089249V511.84919l-756.664114 1.5081z"
          fill="#CEE8FA"
          p-id="1544"
        ></path>
        <path
          d="M843.731762 96.116249H269.246146c-70.981247 0-128.691213 57.709966-128.691212 128.691213v574.385076c0 70.981247 57.709966 128.691213 128.691212 128.691213h574.385076c70.981247 0 128.691213-57.709966 128.691213-128.691213V224.807462c0.10054-71.081787-57.609426-128.691213-128.590673-128.691213z m78.019048 723.485911c0 31.670103-25.738243 57.408346-57.408346 57.408346H248.735984c-31.670103 0-57.408346-25.738243-57.408345-57.408346V204.09622c0-31.670103 25.738243-57.408346 57.408345-57.408346h615.60648c31.670103 0 57.408346 25.738243 57.408346 57.408346v615.50594z"
          fill="#2197EF"
          p-id="1545"
        ></path>
      </svg>
      <input
        style="display: none"
        type="checkbox"
        :checked="props.isChecked"
        name="finish"
        :id="'finish' + props.id"
        @change="emitUpdateChecked(props.id)"
      />
    </label>
    <div class="todo-content">
      {{ props.content }}
    </div>
    <svg
      t="1660207350357"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1023"
      width="48"
      height="48"
      @click="deleteTodo(props.id)"
    >
      <path
        d="M558.1 928.3H280.5c-12.6 0-22.7-10.2-22.7-22.8V282c0-12.6 10.2-22.8 22.7-22.8 12.6 0 22.7 10.2 22.7 22.8v600.7h254.9c12.6 0 22.7 10.2 22.7 22.8 0.1 12.6-10.1 22.8-22.7 22.8z m197.4 0h-80.2c-12.6 0-22.7-10.2-22.7-22.8 0-12.6 10.2-22.8 22.7-22.8h57.5v-352c0-12.6 10.2-22.8 22.7-22.8 12.6 0 22.7 10.2 22.7 22.8v374.9c0.1 12.5-10.1 22.7-22.7 22.7z m0 0"
        fill="#2197EF"
        p-id="1024"
      ></path>
      <path
        d="M360.8 903.1h-80.2V509.5c0-22.2 18-40.3 40.1-40.3s40.1 18 40.1 40.3v393.6z m0 0"
        fill="#CEE8FA"
        p-id="1025"
      ></path>
      <path
        d="M360.8 925.9h-80.2c-12.6 0-22.7-10.2-22.7-22.8V509.5c0-34.8 28.2-63.1 62.8-63.1s62.8 28.3 62.8 63.1v393.6c0 12.6-10.2 22.8-22.7 22.8z m-57.5-45.6H338V509.5c0-9.6-7.8-17.4-17.4-17.4s-17.4 7.8-17.4 17.4v370.8z m0 0"
        fill="#2197EF"
        p-id="1026"
      ></path>
      <path
        d="M558.2 903.1H478V509.5c0-22.2 18-40.3 40.1-40.3 22.2 0 40.1 18 40.1 40.3v393.6z m0 0"
        fill="#CEE8FA"
        p-id="1027"
      ></path>
      <path
        d="M558.2 925.9H478c-12.6 0-22.7-10.2-22.7-22.8V509.5c0-34.8 28.2-63.1 62.8-63.1 34.7 0 62.8 28.3 62.8 63.1v393.6c0 12.6-10.2 22.8-22.7 22.8z m-57.5-45.6h34.7V509.5c0-9.6-7.8-17.4-17.4-17.4-9.6 0-17.4 7.8-17.4 17.4v370.8z m0 0"
        fill="#2197EF"
        p-id="1028"
      ></path>
      <path
        d="M755.5 903.1h-80.2V509.5c0-22.2 18-40.3 40.1-40.3s40.1 18 40.1 40.3v393.6z m0 0"
        fill="#CEE8FA"
        p-id="1029"
      ></path>
      <path
        d="M755.5 925.9h-80.2c-12.6 0-22.7-10.2-22.7-22.8V509.5c0-34.8 28.2-63.1 62.8-63.1 34.7 0 62.8 28.3 62.8 63.1v393.6c0.1 12.6-10.1 22.8-22.7 22.8zM698 880.3h34.7V509.5c0-9.6-7.8-17.4-17.4-17.4-9.6 0-17.4 7.8-17.4 17.4v370.8z m0 0"
        fill="#2197EF"
        p-id="1030"
      ></path>
      <path d="M226.2 215.1H810v118.7H226.2z" fill="#CEE8FA" p-id="1031"></path>
      <path
        d="M809.9 356.6H226.2c-12.6 0-22.7-10.2-22.7-22.8V215.1c0-12.6 10.2-22.8 22.7-22.8H810c12.6 0 22.7 10.2 22.7 22.8v118.7c0 12.6-10.2 22.8-22.8 22.8z m-561-45.6h538.3v-73.1H248.9V311z m0 0"
        fill="#2197EF"
        p-id="1032"
      ></path>
      <path
        d="M613.2 237.9c-12.6 0-22.7-10.2-22.7-22.8v-68.5H445.6v68.5c0 12.6-10.2 22.8-22.7 22.8-12.6 0-22.7-10.2-22.7-22.8v-91.3c0-12.6 10.2-22.8 22.7-22.8h190.3c12.6 0 22.7 10.2 22.7 22.8v91.3c0 12.6-10.2 22.8-22.7 22.8z m0 0"
        fill="#2197EF"
        p-id="1033"
      ></path>
    </svg>
    <div class="todo-deadline">
      {{ props.date }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["updateChecked", "delete"]);

function emitUpdateChecked(id) {
  emit("updateChecked", id);
}

function deleteTodo(id) {
  emit("delete", id);
}
</script>

<style lang="scss" scoped>
.todo-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  transition: all 0.2s ease-in-out;

  &.checked {
    text-decoration: line-through;
    color: #aaa;
    opacity: 0.4;

    .todo-content {
      user-select: none;
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  .icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .todo-content {
    flex: 1;
    text-align: left;
  }

  .todo-deadline {
    position: absolute;
    bottom: 4px;
    right: 4px;
    font-size: 12px;
    color: #666;
  }
}
</style>