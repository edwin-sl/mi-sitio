<template>
  <div>

    <div class="row">
      <div class="col">
        <input class="form-control" placeholder="Titulo" type="text" v-model="title">
      </div>

      <div class="col">
        <select class="form-select" v-model="priority">
          <option>bajo</option>
          <option>medio</option>
          <option>alto</option>
        </select>
      </div>
    </div>

    <div class="col">
      <textarea class="form-control" placeholder="Descripcion" v-model="description" rows="3"></textarea>
    </div>

    <div class="col">
      <button class="btn btn-primary" @click="addTodo({title, priority, description})">Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  /*
    let var1 = 1
    let var2 = 'hola'

    let x = {var1, var2}
    let x = {var1: var1, var2: var2}
  */
  name: "CreateTodo",
  data() {
    // basado en el esquema del modelo en el servidor/base de datos
    // SERVIDOR todo.schema.js
    return {
      title: '',
      description: '',
      priority: ''
    }
  },
  methods: {
    addTodo(todo) {
      this.$root.$data.createTodo(todo)
          .then(() => {
            this.$root.$router.push('/todos')
          })
    }
  }
}
</script>

<style scoped>

</style>