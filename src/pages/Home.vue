<template>
  <div class="go-to-todo">
    <router-link to="/todo">
      <div class="hello-text">일정관리 사용하기</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeVue',
};
</script>

<style lang="scss">
.go-to-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;

  a {
    text-decoration: none;
  }

  .hello-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border: 1px solid #66d9e8;
    border-radius: 4px;
    background-color: #66d9e8;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #22b8cf;
      background-color: #22b8cf;
    }
  }
}
</style>
