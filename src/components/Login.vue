<template>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="nombre"/>
      <label for="name">Password</label>
      <input type="password" name="password" v-model="pwd" />
      <button @click="cambiarValor">Login</button>
    </div> 
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    usuarios: Array
  },
  data(){
    return {
    nombre: '',
    pwd: ''
    }
  },
  methods: {
    cambiarValor(){
      let existe = this.usuarios.filter(o=> o.usuario == this.nombre && o.contrasenia == this.pwd)
      if( existe)
      {
      this.$emit('changeFlag')
      }
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
