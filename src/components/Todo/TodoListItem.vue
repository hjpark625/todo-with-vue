<template>
  <div class="todo-list-item-wrapper">
    <form v-show="isEdit" class="edit-form" @submit.prevent="editTodo(todo.id)">
      <input
        type="text"
        class="edit-input"
        @input="$store.commit('editChange', $event.target.value)"
        :value="$store.state.editInput"
        :placeholder="todo.text"
        ref="editInput"
      />
    </form>

    <div class="checkbox" @click="$store.commit('checkTodo', todo.id)">
      <font-awesome-icon
        v-show="todo.isDone === true"
        :icon="['fas', 'square-check']"
        class="check"
      />
      <font-awesome-icon
        v-show="todo.isDone === false"
        :icon="['far', 'square']"
      />
      <div
        v-show="!isEdit"
        :class="[todo.isDone === false ? 'text' : 'text completed']"
      >
        {{ todo.text }}
      </div>
    </div>
    <div :class="[todo.isDone === false ? 'edit' : 'none']" @click="toggleEdit">
      <font-awesome-icon :icon="['fas', 'pen']" />
    </div>
    <div class="remove" @click="$store.commit('deleteTodo', todo.id)">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
      const self = this;
      setTimeout(function () {
        self.$refs.editInput.focus();
      }, 1);
    },
    editTodo(id) {
      if (this.$store.state.editInput.length === 0) {
        alert('수정 할 내용을 입력해주세요');
      } else {
        this.$store.commit('editTodo', id);
        this.isEdit = false;
      }
    },
  },
};
</script>

<style lang="scss">
.todo-list-item-wrapper {
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }

  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .check {
      color: #22b8cf;
    }
  }

  .text {
    margin-left: 0.5rem;
    flex: 1;
    color: inherit;
    text-decoration: none;
  }
  .completed {
    text-decoration: line-through;
    color: #adb5bd;
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }
  .edit {
    display: flex;
    margin-right: 1.5rem;
    align-items: center;
    font-size: 1.2rem;
    color: #868e96;
    cursor: pointer;
    &:hover {
      color: #ced4da;
    }
  }
  .none {
    display: none;
  }
  .edit-form {
    position: absolute;
    left: 9%;
    z-index: 10;
  }
  .edit-input {
    width: 24rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #adb5bd;
    padding: 0.5rem;
    padding-left: 0;
    font-size: 1rem;
    color: #868e96;
    &:focus {
      outline: none;
    }
  }
}
</style>
