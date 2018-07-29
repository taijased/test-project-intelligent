<template>
  <div>
    <app-todo></app-todo>
  </div>
</template>

<script>

import Todo from './components/Todo.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  data () {
    return {

    }
  },
  components: {
    appTodo: Todo
  }

}
</script>

<style>

</style>
