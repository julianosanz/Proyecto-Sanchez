<template>
    <div>
      <ul>
        <li v-for="item in carroLocal" :key="item.id">
        <p>{{ item.nombre }}</p>
        <p>{{ item.cantidadCarrito }}</p>
        <button @click="sumarUno(item)">+</button>
        <button @click="restarUno(item)">-</button>
        </li>
      </ul>
      
      
    </div> 
</template>

<script>
export default {
  name: 'CarritoPage',
  props: [ "carro"],
  data(){
    return {
      carroLocal: [

      ]
    }
  },
  mounted(){
    this.carroLocal = this.carro
  },
  methods: {
    sumarUno(payload){
      payload.cantidadCarrito++;
    },
    restarUno(payload){
      payload.cantidadCarrito--;
    } 
  },
  watch:{
    carroLocal(newObject){
      this.$emit("emiActualizarCarritoPrincipal",newObject)
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
