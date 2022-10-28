<template>
  <div class="todo-list-item-wrapper">
    <div class="checkbox">
      <font-awesome-icon :icon="['fas', 'square-check']" />
      <font-awesome-icon :icon="['far', 'square']" />
      <div class="text">text</div>
      <div class="remove">
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      color: inherit;
    }
  }

  .text {
    margin-left: 0.5rem;
    flex: 1;

    color: inherit;
    text-decoration: none;
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
}
</style>
