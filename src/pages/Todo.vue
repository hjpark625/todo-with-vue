<template>
  <TodoTemplate>
    <TodoInsert />
    <TodoList :todos="todos" />
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
  data() {
    return {
      todos: [
        { id: 1, text: '테스트용 입니다1.', isDone: false },
        { id: 2, text: '테스트용 입니다2.', isDone: false },
        { id: 3, text: '테스트용 입니다3.', isDone: false },
      ],
    };
  },
};
</script>

<style></style>
