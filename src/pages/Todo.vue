<template>
  <TodoTemplate>
    <TodoInsert @onChangeField="changeField" @onAddTodo="addTodo" />
    <TodoList
      :todos="todos"
      @onRemoveTodo="removeTodo"
      @onCheckTodo="checkTodo"
    />
  </TodoTemplate>
</template>

<script>
import TodoTemplate from '@/components/Todo/TodoTemplate.vue';
import TodoInsert from '@/components/Todo/TodoInsert.vue';
import TodoList from '@/components/Todo/TodoList.vue';

let nextId = 1;

export default {
  name: 'TodoVue',
  components: {
    TodoTemplate,
    TodoInsert,
    TodoList,
  },
  data() {
    return {
      inputText: '',
      todos: [],
    };
  },
  methods: {
    changeField(payload) {
      this.inputText = payload;
    },
    addTodo() {
      if (this.inputText.length === 0) {
        alert('내용을 채워주세요!');
      } else {
        this.todos = this.todos.concat({
          id: nextId,
          text: this.inputText,
          isDone: false,
        });
        nextId += 1;
        this.inputText = '';
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkTodo(id) {
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    },
  },
};
</script>
