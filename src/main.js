import 'dotenv/config'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue";
import Todos from "./components/Todos.vue";

// import 'dotenv/config'
// require('dotenv').config()
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: HelloWorld,
      component: HelloWorld
    },
    {
      path: '/todos',
      name: Todos,
      component: Todos
    }
  ]
})

const store = {
  state: {
    todos: []
  },

  listTodos() {
    console.log('LIST')
    const endpoint = `${process.env.VUE_APP_BACKEND}/api/read-todo`
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log('RESPONSE: ', response)
      this.state.todos = response
    })

    //GET /read-todos
    // state.todos = response
  },
  createTodo(todo) {
    console.log('CREATE ', todo)
  },
  removeTodo(todo) {
    console.log('REMOVE ', todo)
  }
}

new Vue({
  data: store,
  router,
  render: h => h(App),
}).$mount('#app')
