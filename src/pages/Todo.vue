<template>
  <TodoTemplate>
    <TodoInsert />
    <TodoList :todos="$store.state.todos" />
  </TodoTemplate>
</template>

<script>
import TodoTemplate from '@/components/Todo/TodoTemplate.vue';
import TodoInsert from '@/components/Todo/TodoInsert.vue';
import TodoList from '@/components/Todo/TodoList.vue';

export default {
  name: 'TodoVue',
  components: {
    TodoTemplate,
    TodoInsert,
    TodoList,
  },
};
</script>
