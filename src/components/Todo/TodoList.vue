<template>
  <!-- <div class="empty-todos">해야 할 일을 채워주세요!</div> -->
  <div class="todo-list-wrapper">
    <TodoListItem />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
};
</script>

<style lang="scss">
.todo-list-wrapper {
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
}
.empty-todos {
  text-align: center;
  margin-top: 8rem;
  color: #adb5bd;
  font-size: 2rem;
}
</style>
