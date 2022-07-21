export default{
    created: function () {
        this.saludar()
    },
    data(){
        return{
            mensajeDesdeMixin: 'Hola vengo desde el mixin',
            otroMensaje: 'Hola soy un mensaje',
        }
    },
    methods: {
        saludar: function() {
            console.log('Saludos desde el mixin!')
        }
    }
}