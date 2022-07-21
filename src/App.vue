<template>
  <div class="container" id="app">
    <navBar></navBar>
    <LoginPage v-if="!canAccess" @changeFlag="recibiElMensaje" :usuarios="listadoDeUsuarios"/>
    <PaginaLista v-if="canAccess" @changeFlagFromMain="recibiElMensaje" :productos="listadoDeProductos" @emitVerDetalles="recibirVerDetalle" />
    <Carrito :carro="carrito" @emiActualizarCarritoPrincipal="recibirActualizarAlCarrito" />
    <Detail v-if="seleccionado" :producto="seleccionado"/>

    <Registro v-if="!canAccess" @EnviarRegistro="recibirRegistro" @emitAgregarCarrito="recibirAgregarCarrito"></Registro>
  </div>
</template>

<script>
import navBar from './components/navbar/indexNav.vue'

import LoginPage from './components/Login.vue'
import Registro from './components/Registro.vue'

import PaginaLista from './components/PaginaLista.vue'
import Carrito from './components/Carrito.vue'
import Detail from './components/Detail.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    PaginaLista,
    navBar,
    Registro,
    Carrito,
    Detail
},
  data(){
    return {
      canAccess: false,
      listadoDeUsuarios: [],
      listadoDeProductos: 
        [{
  id: 1,
  titulo: "Volkswagen",
  descripcion: "Passat",
  cantidad: 0,
  precio: "$2.20",
  image: "https://robohash.org/nonetdolorem.png?size=50x50&set=set1"
}, {
  id: 0,
  titulo: "Subaru",
  descripcion: "Leone",
  cantidad: 0,
  precio: "$5.17",
  image: "https://robohash.org/voluptasdoloresvoluptate.png?size=50x50&set=set1"
}, {
  id: 3,
  titulo: "Saab",
  descripcion: "900",
  cantidad: 0,
  precio: "$3.83",
  image: "https://robohash.org/animiminimatempore.png?size=50x50&set=set1"
}, {
  id: 4,
  titulo: "Buick",
  descripcion: "LaCrosse",
  cantidad: 0,
  precio: "$3.21",
  image: "https://robohash.org/praesentiumeligendiex.png?size=50x50&set=set1"
}, {
  id: 5,
  titulo: "Mazda",
  descripcion: "MX-3",
  cantidad: 0,
  precio: "$3.08",
  image: "https://robohash.org/sittemporeet.png?size=50x50&set=set1"
}, {
  id: 6,
  titulo: "Chrysler",
  descripcion: "Concorde",
  cantidad: 0,
  precio: "$4.63",
  image: "https://robohash.org/quiutaperiam.png?size=50x50&set=set1"
}, {
  id: 7,
  titulo: "Mercury",
  descripcion: "Mariner",
  cantidad: 0,
  precio: "$3.11",
  image: "https://robohash.org/utvoluptatemfacilis.png?size=50x50&set=set1"
}, {
  id: 8,
  titulo: "Toyota",
  descripcion: "Camry",
  cantidad: 0,
  precio: "$2.34",
  image: "https://robohash.org/omniserroriste.png?size=50x50&set=set1"
}, {
  id: 9,
  titulo: "Lamborghini",
  descripcion: "Murciélago",
  cantidad: 0,
  precio: "$8.42",
  image: "https://robohash.org/voluptatesrerumveritatis.png?size=50x50&set=set1"
}, {
  id: 10,
  titulo: "Dodge",
  descripcion: "Ram Van 3500",
  cantidad: 0,
  precio: "$3.19",
  image: "https://robohash.org/commodiametin.png?size=50x50&set=set1"
  },
  ],
  carrito: [

  ],
  seleccionado: null 
    };
  
  },
  methods: {
    recibiElMensaje(){
      this.canAccess = !this.canAccess
    },
    recibirRegistro(payload){
      this.listado.push(payload)
    },
    recibirAgregarCarrito(payload){
      this.carrito.push(payload)
    },
    recibirActualizarAlCarrito(payload)
    {
      this.carrito = [...payload]
      // this.carrito = Object.assign(this.carrito, payload)
    },
    recibirVerDetalle(payload)
    {
      this.seleccionado = [...payload]

    }
  }
}
</script>

<style>

.footer {
            position: sticky;
            bottom:0;
            width: 100%;
  }
  .card {

    min-width: 220px;
    
    padding: 20px 10px;
    
    margin: 10px 10px;
    
    font-size: large;
    
    color:grey;
    
    border-color:palegreen;
    
    border-style: solid;
    
    border-width: 1px;
    
    max-width: 220px;
    
    background-color: whitesmoke !important;
    
    transition: 0.7s;
    
    }
    
    .card:hover {
    
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
    
    }
</style>
