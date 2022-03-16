<template>
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
            <p>
              <small class="text-muted">
                {{todo.description}}
              </small>
            </p>
          </td>

          <td>
            <button class="btn btn-danger" @click="removeTodo(todo._id)">X</button>
          </td>

          <td>
            <router-link :to="{name: 'Update', params: {todo: todo}}">✏️</router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "TodosComp",
  props: {
   todos: Array
  },
  methods: {
    removeTodo(todoId) {
      // Remueve la tarea y refresca la pagina
      this.$root.$data.removeTodo(todoId).then(() => {
        // opcion 1
        // location.reload()
        // opcion 2
        this.$root.$router.go()
      })
    }
  }
}
</script>

<style scoped>

</style>