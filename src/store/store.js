import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      id: 1,
      todoInput: '',
      editInput: '',
      todos: [],
    };
  },
  mutations: {
    changeField(state, payload) {
      state.todoInput = payload;
    },
    editChange(state, payload) {
      state.editInput = payload;
    },
    addTodo(state) {
      state.todos = state.todos.concat({
        id: state.id,
        text: state.todoInput,
        isDone: false,
      });
      state.id++;
      state.todoInput = '';
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    checkTodo(state, payload) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
    },
    editTodo(state, payload) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, text: state.editInput } : todo,
      );
      state.editInput = '';
    },
  },
});

export default store;
