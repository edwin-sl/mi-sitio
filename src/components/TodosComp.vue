<template>
  <div>
    <h1>Mis Tareas</h1>

    <div>
      <table class="table">
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td>
              <h1 v-if="todo.priority==='alto'">🔴</h1>
              <h1 v-else-if="todo.priority==='medio'">🟡</h1>
              <h1 v-else>🟢</h1>
            </td>
            <td>
              {{todo.title}}
            </td>
            <td>
              <button class="btn btn-danger" @click="removeTodo(todo)">X</button>
            </td>
          </tr>
        </tbody>
      </table>

<!--      <ul>-->
<!--        <li v-for="todo in todos" :key="todo.id" >-->
<!--          <div>-->
<!--            <h1 v-if="todo.priority==='alto'">🔴</h1>-->
<!--            <h1 v-else-if="todo.priority==='medio'">🟡</h1>-->
<!--            <h1 v-else>🟢</h1>-->
<!--            {{todo.title}}-->
<!--            <button @click="removeTodo(todo)">X</button>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TodosComp",
   props: {
    todos: Array
   },
  methods: {
    removeTodo(todo) {
      this.$emit('onRemove', todo)
    }
  }
}
</script>

<style scoped>

</style>