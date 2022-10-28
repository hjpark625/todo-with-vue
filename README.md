# Todo App with Vue.js

## 💡 프로젝트 정보

> 1. 프로젝트 명: Todo App with Vue.js
> 2. 프로젝트 기간: 2022. 10.26. ~ 2022. 10. 28.

---

## 🌈 프로젝트 실행 방법

    $ git clone https://github.com/hjpark625/todo-with-vue.git
    $ cd todo-with-vue
    $ yarn install
    $ yarn serve

---

## ⭐️ 프로젝트 배포 링크

> https://todo-with-vue-lemon.vercel.app/

---

## 📚 활용 기술 스택

![vue](https://img.shields.io/badge/vue.js-3.2.13-41B883?logo=vue.js)
![vue-router](https://img.shields.io/badge/vue--router-4.1.6-41B883?logo=vue.js)
![sass](https://img.shields.io/badge/sass-1.55.0-C76395?logo=sass)

---

## 📁 폴더 구조

    root
    |-- yarn.lock
    |-- vue.config.js
    |-- README.md
    |-- package.json
    |-- jsconfig.json
    |-- babel.config.js
    |-- .gitignore
    |-- /public
    |   |-- index.html
    |-- /src
        |-- /assets
        |   |-- /scss
        |       |-- reset.scss
        |-- /components
        |   |-- /Todo
        |       |-- TodoInsert.vue
        |       |-- TodoList.vue
        |       |-- TodoListItem.vue
        |       |-- TodoTemplate.vue
        |-- /pages
        |   |-- Home.vue
        |   |-- NotFoundPage.vue
        |   |-- Todo.vue
        |-- /router
        |   |-- index.js
        |-- App.vue
        |-- main.js

---

## 📝 구현 기능

- **Todo Create**
  - Todo리스트를 추가하는 기능인 `addTodo`는 Todo.vue에서 기능을 제작
    ```html
    <script>
      export default {
        name: 'TodoVue',
        /* ... */
        data() {
          return {
            inputText: '',
            editInput: '',
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
          /* ... */
        },
      };
    </script>
    ```
