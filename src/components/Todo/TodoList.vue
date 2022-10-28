<template>
  <div class="todo-list-wrapper">
    <div v-if="todos.length === 0" class="empty-todos">
      해야 할 일을 채워주세요!
    </div>
    <div v-else>
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
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
