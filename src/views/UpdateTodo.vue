<template>
  <div>

    <div class="row">
      <div class="col">
        <input class="form-control" placeholder="Titulo" type="text" v-model="todo.title">
      </div>

      <div class="col">
        <select class="form-select" v-model="todo.priority">
          <option>bajo</option>
          <option>medio</option>
          <option>alto</option>
        </select>
      </div>
    </div>

    <div class="col">
      <textarea class="form-control" placeholder="Descripcion" v-model="todo.description" rows="3"></textarea>
    </div>

    <div class="col">
      <button class="btn btn-primary" @click="updateTodo(todo)">Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "UpdateTodo",
  data() {
    return {
      // Definido en el _params_ del <router-link> apuntando a esta vista/componente
      todo: this.$route.params.todo
    }
  },

  methods: {
    updateTodo(todo) {
      this.$root.$data.updateTodo(todo)
          .then(() => {
            this.$root.$router.push('/todos')
          })
    }
  }
}
</script>

<style scoped>

</style>