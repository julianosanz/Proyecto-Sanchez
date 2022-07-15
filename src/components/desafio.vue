<template lang="html">

  <section class="desafio">
 
  <table :style="estilosnuevo">
            <thead>
                <tr :style="estilosnuevo">
                    <th :style="estilosnuevo"> Titulo </th>
                    <th :style="estilosnuevo"> Año </th>
                    <th :style="estilosnuevo"> Categoria </th>
                    <th> Duracion </th>
                </tr>
            </thead>

            <tbody>
            
                <tr v-for="o in peliculas" :key="o.id"> 
                    <td> {{ o.titulo }} </td>
                    <td> {{ o.year }} </td>
                    <td> {{ o.categoria }} </td>
                    <td> {{ o.duracion }} </td>
                </tr>
            
            </tbody>
        </table>
        </section>
</template>

<script lang="js">

  export default  {
    name: 'desafioComponente',
    props: {
        titulo: String,
        portada: String,
        puntaje: String,
        peliculas: Array,
        estilosnuevo: Object
        
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .desafio {

  }
</style>
