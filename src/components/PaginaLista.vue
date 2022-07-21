<template>
    <div>
      <ul>
        
        <li class="card" style="width: 18rem;" v-for="item in productos" :key="item.id">
          {{ item.titulo }}
          <img class="card-img-top" src= "item.image" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">{{ item.descripcion }}</p>
              <button @click="agregarCarrito">Agregar a Carrito</button>
              <button @click="verDetalle(item)">Detalle</button>
            </div>
        </li>
        
        
      </ul>
      

      <a @click="desLogearse">LogOut</a>

    </div> 
</template>

<script>
export default {
  name: 'PaginaLista',
  props: [ "productos"],
  data(){
    return {
      
    }
  },
  methods: {
    desLogearse(){
      
      this.$emit('changeFlagFromMain')
      
    },
    agregarCarrito(payload){
      let objetoCarrito = {...payload, cantidadCarrito: 1}
      this.$emit('emitAgregarCarrito', objetoCarrito)
    },
    verDetalle(payload){
      this.$emit('emitVerDetalles', payload)
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
