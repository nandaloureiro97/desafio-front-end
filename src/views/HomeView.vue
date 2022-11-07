<template>
  <div class="home">
    <Usuarios/>
  </div>
</template>

<script>
// @ is an alias to /src
import Usuarios from '@/components/Usuarios.vue'

export default {
  name: 'HomeView',
  components: {
    Usuarios
  }
}
</script>
