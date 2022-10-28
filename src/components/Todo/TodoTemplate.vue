<template>
  <div class="todo-wrapper">
    <router-link to="/">
      <div class="app-title">일정 관리</div>
    </router-link>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoTemplate',
};
</script>

<style lang="scss">
.todo-wrapper {
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  a {
    text-decoration: none;
  }

  .app-title {
    position: relative;
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .content {
    background: white;
    height: 22rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
