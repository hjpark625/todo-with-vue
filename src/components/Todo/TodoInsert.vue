<template>
  <form class="todo-insert-form">
    <input type="text" class="todo-input" />
    <button class="add-button">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'TodoInsert',
};
</script>

<style lang="scss">
.todo-insert-form {
  display: flex;
  background: #495057;
  position: sticky;
  top: 0;
  z-index: 2;

  .todo-input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }

  .add-button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.1s ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
}
</style>
