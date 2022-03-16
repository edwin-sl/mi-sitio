<template>
  <div>
    <h1>Mis Tareas</h1>

    <TodosComp v-bind:todos="this.$root.$data.state.todos"></TodosComp>
  
    <!--  <etiquete v-bind:atributo1="algo uno" atributo2="algo 2"> -->
    <!--    EL CONTENIDO DE MI ETIQUETA -->
    <!--  </etiquete>-->
  </div>
</template>

<script>
import TodosComp from "../components/TodosComp.vue";

export default {
  name: "Todos",
  components: {
    // HelloWorld
    TodosComp
  },

  mounted() {
    // Inicializa la data local del store con la data de la base de datos
    this.$root.$data.listTodos()
  },
  destroyed() {
    console.log('bye')
  }
}
</script>

<style scoped>

</style>