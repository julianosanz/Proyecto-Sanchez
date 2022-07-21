<template>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="usuario.nombre"/>
      <label for="name">Apellido</label>
      <input type="text" name="name" v-model="usuario.apellido"/>
      <label for="name">Usuario</label>
      <input type="text" name="name" v-model="usuario.usuario"/>
      <label for="name">Password</label>
      <input type="password" name="password" v-model="usuario.contrasenia" />
      <button @click="registrar">Registrar</button>
    </div> 
</template>

<script>
export default {
  name: 'RegistroPage',
  props: [],
  data(){ 
    return {
      usuario: {
        nombre: "",
        apellido: "",
        usuario: "",
        contrasenia: ""

      }
    }
  },
  methods: {
    registrar(){
      this.$emit('enviarRegistro', this.usuario)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
