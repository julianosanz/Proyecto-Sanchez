<template>
    <div>
      <h1> {{ producto.titulo}}</h1>
      <p><i>{{ producto.descripcion }}</i></p>
      
    </div>
    
    
</template>

<script>
/* eslint-disable */
export default {
  name: 'Detalle',
  props: [ "producto" ],
  data(){
    return {
      
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
