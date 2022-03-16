import 'dotenv/config'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./views/HelloWorld.vue";
import Todos from "./views/ListTodos.vue";
import CreateTodo from "./views/CreateTodo";
import UpdateTodo from "./views/UpdateTodo"

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'List',
      component: Todos
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateTodo
    },
    {
      path: '/edit',
      name: 'Update',
      component: UpdateTodo
    }
  ]
})

// Variables de ambiente (EV - Environment Variables) en .env y .env.* empiezan con VUE_APP_
// Las EV predeterminadas se toman de .env
// Correr el script build utilizara las EV de .env.production
// Correr el script serve utilizara las EV de .env.local

const store = {
  state: {
    // Almacena la _data_ extraida de la base de datos
    todos: []
  },
  /*
    let s = `${process.env.VUE_APP_BACKEND}/api/create-todo`
    let s = process.env.VUE_APP_VACKEND + '/api/create-todo'
    s1 es equivalente a s2
  */

  // Acciones del CRUD. Accesibles desde cualquier componente por this.$root.data

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
  },

  createTodo(todo) {
    console.log('CREATE ', todo)
    const endpoint = `${process.env.VUE_APP_BACKEND}/api/create-todo`
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log('RESPONSE: ', response)
    })
  },

  removeTodo(todoId) {
    console.log('REMOVE ', todoId)
    const endpoint = `${process.env.VUE_APP_BACKEND}/api/delete-todo/${todoId}`

    return fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log('RESPONSE: ', response)
    })
  },

  updateTodo(todo) {
    console.log('UPDATE ', todo)
    const endpoint = `${process.env.VUE_APP_BACKEND}/api/update-todo/${todo._id}`

    return fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log('RESPONSE: ', response)
    })
  }
}

new Vue({
  data: store,
  router,
  render: h => h(App),
}).$mount('#app')
