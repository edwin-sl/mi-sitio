<template>
  <div>
    <!--    <h1 v-bind:id="id.toUpperCase()">-->
    <!--      {{ message.toUpperCase() }}-->
    <!--    </h1>-->
  
    <!--    <h1 :id="id"> {{ message.toUpperCase() }} </h1>-->
    <!--    <button v-on:click="increment">Contador: {{count}}</button>-->
    <!--    <button @click="increment">-->
    <!--      Contador: {{count}}-->
    <!--    </button>-->
  
    <!--    <div>-->
    <!--      <h1 v-if="newTodoPriority==='alto'">🔴</h1>-->
    <!--      <h1 v-else-if="newTodoPriority==='medio'">🟡</h1>-->
    <!--      <h1 v-else>🟢</h1>-->
    <!--      {{newTodoTitle}}-->
    <!--    </div>-->

    <div class="row">
      <div class="col">
        <input class="form-input" type="text" v-model="newTodoTitle">
      </div>
      <div class="col">
        <select class="form-select" v-model="newTodoPriority">
          <option>bajo</option>
          <option>medio</option>
          <option>alto</option>
        </select>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="addTodo">Submit</button>
      </div>
    </div>
    <TodosComp v-bind:todos="this.$root.$data.state.todos" v-on:onRemove="removeTodo"></TodosComp>
  
    <!--  <etiquete v-bind:atributo1="algo uno" atributo2="algo 2"> -->
    <!--    EL CONTENIDO DE MI ETIQUETA -->
    <!--  </etiquete>-->
  </div>
</template>

<script>
import TodosComp from "./TodosComp.vue";
let id = 0

export default {
  name: "Todos",
  components: {
    // HelloWorld
    TodosComp
  },
  data() {
    return {
      message: 'Hello World1',
      id: '123-abc',
      count: 0,

      newTodoTitle: 'Tarea 1',
      // 'bajo', 'medio', 'alto'
      newTodoPriority: '',
      todos: []
    }
  },
  methods: {
    increment() {
      console.log('Suma 1')
      this.count++
    },
    addTodo() {
      this.todos.push({
        id: id++,
        title: this.newTodoTitle,
        priority: this.newTodoPriority
      })
      console.log('Agregar TODO -> ', JSON.stringify(this.todos))
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  },
  mounted() {
    this.$root.$data.listTodos()
  },
  destroyed() {
    console.log('bye')
  }
}
</script>

<style scoped>

</style>