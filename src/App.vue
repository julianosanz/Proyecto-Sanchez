<template>
  <div class="container" id="app">
    <div class="row">

            <div class="col-4 col-md-4 offset-4 text-center">
                <h1 class="main-title">Cartelera</h1>
            </div>

        </div>    
        
        <div class="col-4 col-md-4 offset-4 text-center">
            <h2 class="main-title">Infantiles</h2>
            <desafio 
                :peliculas="infantiles" 
                :estilosnuevo="estiloInfantil"
                >
            </desafio>
        </div>

        <div class="col-4 col-md-4 offset-4 text-center">
            <h2 class="main-title">Todo publico</h2>
            <desafio :peliculas="todoPublico" :estilosnuevo="estiloTodo"></desafio>
        </div>

        <div class="col-4 col-md-4 offset-4 text-center">
            <h2 class="main-title">18+</h2>
            <desafio :peliculas="maYores" :estilosnuevo="estilo18"></desafio>
        </div>
  </div>
</template>

<script>
import desafio from './components/desafio.vue'

export default {
  name: 'App',
  components: {
    desafio
  },
  data(){
    return {
      canAccess: true,
      infantiles: [
                {
                
                id: 1,
                
                titulo: "Cars",
                
                year: "2006",
                
                categoria: "Animacion / Comedia",

                duracion: "96 min"
                
                },
                
                {
                
                id: 2,
                
                titulo: "Metegol",
                
                year: "2013",
                
                categoria: "Animacion / Aventura",

                duracion: "106 min"
                
                },
                
                {
                
                id: 3,
                
                titulo: "Mi villano favorito",
                
                year: "2010",
                
                categoria: "Animacion / Comedia",

                duracion: "95 min"
                
                }
    ],

        todoPublico: [
            {
            
            id: 1,
            
            titulo: "Spider-Man",
            
            year: "2002",
            
            categoria: "Accion / Aventura",

            duracion: "120 min"
            
            },
            
            {
            
            id: 2,
            
            titulo: "Karate Kid",
            
            year: "1984",
            
            categoria: "Animacion / Aventura",

            duracion: "122 min"
            
            },
            
            {
            
            id: 3,
            
            titulo: "Juego de gemelas",
            
            year: "1998",
            
            categoria: "Comedia",

            duracion: "110 min"
            
            }
    ],

        maYores: [
            {
            
            id: 1,
            
            titulo: "John Wick 3",
            
            year: "2019",
            
            categoria: "Accion",

            duracion: "131 min"
            
            },
            
            {
            
            id: 2,
            
            titulo: "Proyecto X",
            
            year: "2012",
            
            categoria: "Comedia",

            duracion: "88 min"
            
            },
            
            {
            
            id: 3,
            
            titulo: "Ambulancia",
            
            year: "2022",
            
            categoria: "Suspenso",

            duracion: "136 min"
            
            }
            
    ],

    estiloInfantil: 
        {
            'border': '1px solid',
            'background' : '#FF5733',
            'color': 'white'
        },
    estiloTodo: 
        {
            'border': '2px solid blue',
            'background' : '#565F07',
            'color': '#2EFF00'
        },
    estilo18: 
        {
            'border': '1px solid red'
            ,'background' : '#00FFCD',
            'color': '#FF0000'
        }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
